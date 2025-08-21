/**
 * Updates icon assets from Figma and regenerates the sprite + types.
 *
 * Env vars required:
 *   FIGMA_TOKEN       - Personal access token
 *
 * Optional env vars:
 *   DRY_RUN=1         - Show actions without writing files
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

import { optimize } from 'svgo';

// Lazy-load dotenv if present
try {
	const dotenvPath = path.resolve(process.cwd(), '.env');
	if (fs.existsSync(dotenvPath)) {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('dotenv').config();
	}
} catch {
	/* ignore */
}

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_KEY = '98HKKXL2dTle29ikJ3tzk7';
const FIGMA_NODE_ID = '1:1483';
const DRY_RUN = process.env.DRY_RUN === '1';

if (!FIGMA_TOKEN) {
	console.error('Missing FIGMA_TOKEN.');
	process.exit(1);
}

const ROOT = path.resolve(process.cwd());
const SPRITE_PATH = path.join(ROOT, 'src/img/sprite.svg');
const TYPES_PATH = path.join(ROOT, 'src/types.ts');
const TYPES_MARKER_START = '// AUTO-GENERATED ICON IDS START';
const TYPES_MARKER_END = '// AUTO-GENERATED ICON IDS END';

interface FigmaNode {
	id: string;
	name: string;
	type: string;
	children?: FigmaNode[];
}
interface ComponentRecord {
	id: string;
	name: string;
}

interface FigmaFileNodesResponse {
	nodes: Record<string, { document: FigmaNode }>;
}

function log(step: string, msg: string, ...rest: unknown[]) {
	console.log(`[icons:${step}] ${msg}`, ...rest);
}

function toIconName(componentName: string): string {
	return componentName
		.trim()
		.replace(/[\s_]+/g, '-')
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.toLowerCase()
		.replace(/[^a-z0-9-]/g, '-')
		.replace(/--+/g, '-')
		.replace(/^-|-$/g, '');
}

async function figmaFetch<T>(url: string): Promise<T> {
	const res = await fetch(url, { headers: { 'X-Figma-Token': FIGMA_TOKEN as string } });
	if (!res.ok) {
		const text = await res.text();
		throw new Error(`Figma API error ${res.status} ${res.statusText}: ${text}`);
	}
	return res.json() as Promise<T>;
}

async function fetchIconNode(): Promise<FigmaNode> {
	log('figma', `Fetching node subtree ${FIGMA_NODE_ID}`);
	const url = `https://api.figma.com/v1/files/${FIGMA_FILE_KEY}/nodes?ids=${encodeURIComponent(FIGMA_NODE_ID)}`;
	const data = await figmaFetch<FigmaFileNodesResponse>(url);
	const wrapper = data.nodes[FIGMA_NODE_ID];
	if (!wrapper) throw new Error(`Icon node ${FIGMA_NODE_ID} not found in file ${FIGMA_FILE_KEY}`);
	return wrapper.document;
}

function traverse(
	node: FigmaNode,
	fn: (n: FigmaNode, parents: FigmaNode[]) => void,
	parents: FigmaNode[] = [],
) {
	fn(node, parents);
	if (node.children) for (const c of node.children) traverse(c, fn, parents.concat(node));
}

function collectComponentsFromNode(root: FigmaNode): ComponentRecord[] {
	const components: ComponentRecord[] = [];
	traverse(root, (n) => {
		if (n.type === 'COMPONENT') components.push({ id: n.id, name: n.name });
	});
	return components;
}

async function fetchSvgImages(components: ComponentRecord[]): Promise<Record<string, string>> {
	const results: Record<string, string> = {};
	const batchSize = 90;
	for (let i = 0; i < components.length; i += batchSize) {
		const batch = components.slice(i, i + batchSize);
		const ids = batch.map((c) => c.id).join(',');
		const url = `https://api.figma.com/v1/images/${FIGMA_FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg`;
		log('figma', `Requesting ${batch.length} images`);
		const json = await figmaFetch<{ images: Record<string, string> }>(url);
		for (const c of batch) {
			if (json.images[c.id]) results[c.id] = json.images[c.id];
		}
	}
	return results;
}

async function downloadSvg(url: string): Promise<string> {
	const res = await fetch(url);
	if (!res.ok) throw new Error(`Failed to download SVG: ${url}`);
	return res.text();
}

function optimizeSvg(svg: string, name: string): string {
	return optimize(svg, {
		path: `${name}.svg`,
		multipass: true,
		plugins: [
			'removeDoctype',
			'removeXMLProcInst',
			'removeComments',
			'removeMetadata',
			'removeEditorsNSData',
			'cleanupAttrs',
			'minifyStyles',
			'mergePaths',
			'convertStyleToAttrs',
			'cleanupIds',
			'convertColors',
			'removeUselessDefs',
			'cleanupNumericValues',
			'collapseGroups',
			'convertShapeToPath',
			'convertPathData',
			'removeEmptyAttrs',
			'removeEmptyText',
			'removeEmptyContainers',
			'removeUnusedNS',
			'sortAttrs',
			{
				name: 'removeAttrs',
				params: { attrs: 'fill' },
			},
		],
	}).data;
}

function extractSvgContentAndViewBox(svg: string): { viewBox: string; content: string } {
	const clean = svg.replace(/<\?xml[^>]*?>/g, '').trim();
	const match = clean.match(/<svg\b([^>]*)>([\s\S]*?)<\/svg>/i);
	if (!match) return { viewBox: '0 0 24 24', content: clean };
	const attrs = match[1];
	const inner = match[2];
	let viewBoxMatch = attrs.match(/\bviewBox="([^"]+)"/i);
	if (!viewBoxMatch) {
		const w = (attrs.match(/\bwidth="([^"]+)"/i) || [])[1] || '24';
		const h = (attrs.match(/\bheight="([^"]+)"/i) || [])[1] || '24';
		viewBoxMatch = ['', `0 0 ${w} ${h}`];
	}
	return { viewBox: viewBoxMatch[1], content: inner.trim() };
}

function readExistingTypesIconNames(): string[] {
	if (!fs.existsSync(TYPES_PATH)) return [];
	const src = fs.readFileSync(TYPES_PATH, 'utf8');
	const withinMarkersMatch = src.match(
		new RegExp(`${escapeRegExp(TYPES_MARKER_START)}([\\s\\S]*?)${escapeRegExp(TYPES_MARKER_END)}`),
	);
	const target = withinMarkersMatch ? withinMarkersMatch[1] : src;
	const names = new Set<string>();
	for (const m of target.matchAll(/'([^']+)'/g)) {
		names.add(m[1]);
	}
	return [...names];
}

function escapeRegExp(s: string) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateTypes(allIconNames: string[]) {
	const sorted = [...new Set(allIconNames)].sort();
	const arr = sorted.map((n) => `\t'${n}',`).join('\n');
	const fileContent = `// This file is auto-generated by scripts/figma-icons.ts. Do not edit manually.
${TYPES_MARKER_START}
const icons = [
${arr}
] as const;
type IconName = (typeof icons)[number];

export type { IconName };
export { icons };
${TYPES_MARKER_END}
`;
	if (DRY_RUN) {
		log('types', '(dry-run) would write types.ts');
		return;
	}
	fs.writeFileSync(TYPES_PATH, fileContent, 'utf8');
	log('types', `types.ts written (${sorted.length} icons)`);
}

function readExistingSpriteSymbolNames(): Set<string> {
	const names = new Set<string>();
	if (!fs.existsSync(SPRITE_PATH)) return names;
	const sprite = fs.readFileSync(SPRITE_PATH, 'utf8');
	for (const m of sprite.matchAll(/<symbol[^>]*\bid="lp-icon-([^"]+)"/g)) {
		names.add(m[1]);
	}
	return names;
}

function appendSymbolsToSprite(newSymbols: { name: string; svg: string }[]) {
	if (!newSymbols.length) return;

	const buildSymbolBlock = (name: string, svg: string) => {
		const { viewBox, content } = extractSvgContentAndViewBox(svg);
		const indentedInner = content
			.split('\n')
			.map((l) => (l.trim() ? '\t\t' + l : l))
			.join('\n');
		return {
			name,
			block: `\t<symbol id="lp-icon-${name}" viewBox="${viewBox}">\n${indentedInner}\n\t</symbol>`,
		};
	};

	const normalizeExistingBlock = (name: string, rawBlock: string) => {
		// Rebuild to enforce tab indentation (ignore original formatting)
		const m = rawBlock.match(/<symbol\b[^>]*viewBox="([^"]+)"[^>]*>([\s\S]*?)<\/symbol>/);
		let viewBox = '0 0 24 24';
		let inner = '';
		if (m) {
			viewBox = m[1];
			inner = m[2].trim();
		} else {
			inner = rawBlock;
		}
		const indentedInner = inner
			.split('\n')
			.map((l) => (l.trim() ? '\t\t' + l.trim() : l))
			.join('\n');
		return {
			name,
			block: `\t<symbol id="lp-icon-${name}" viewBox="${viewBox}">\n${indentedInner}\n\t</symbol>`,
		};
	};

	if (!fs.existsSync(SPRITE_PATH)) {
		const created = newSymbols
			.map((s) => buildSymbolBlock(s.name, s.svg))
			.sort((a, b) => a.name.localeCompare(b.name));
		const sprite =
			`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n` +
			created.map((s) => s.block).join('\n') +
			'\n</svg>\n';
		if (DRY_RUN) {
			log('sprite', '(dry-run) would create sorted sprite.svg');
		} else {
			fs.mkdirSync(path.dirname(SPRITE_PATH), { recursive: true });
			fs.writeFileSync(SPRITE_PATH, sprite, 'utf8');
			log('sprite', `Created sprite.svg with ${created.length} symbol(s)`);
		}
		return;
	}

	const existing = fs.readFileSync(SPRITE_PATH, 'utf8');
	const symbolRegex = /<symbol\b[^>]*id="lp-icon-([^"]+)"[^>]*>[\s\S]*?<\/symbol>/g;
	const existingSymbols: { name: string; block: string }[] = [];
	for (const match of existing.matchAll(symbolRegex)) {
		existingSymbols.push(normalizeExistingBlock(match[1], match[0]));
	}

	const incomingBlocks = newSymbols.map((s) => buildSymbolBlock(s.name, s.svg));

	const mergedMap = new Map<string, { name: string; block: string }>();
	for (const s of existingSymbols) mergedMap.set(s.name, s);
	for (const s of incomingBlocks) if (!mergedMap.has(s.name)) mergedMap.set(s.name, s);

	const sortedBlocks = [...mergedMap.values()].sort((a, b) => a.name.localeCompare(b.name));

	const openTagMatch = existing.match(/<svg[^>]*>/);
	const openTag =
		openTagMatch?.[0] ||
		'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">';

	const updated = `${openTag}\n` + sortedBlocks.map((s) => s.block).join('\n') + '\n</svg>\n';

	if (DRY_RUN) {
		log('sprite', `(dry-run) would rewrite sprite.svg (total symbols: ${sortedBlocks.length})`);
	} else {
		fs.writeFileSync(SPRITE_PATH, updated, 'utf8');
		log('sprite', `Sprite rewritten with ${sortedBlocks.length} sorted symbol(s)`);
	}
}

async function main(): Promise<void> {
	const iconRoot = await fetchIconNode();
	const components = collectComponentsFromNode(iconRoot);
	if (!components.length) {
		log('warn', 'No components found.');
		return;
	}
	log('discover', `Found ${components.length} component(s)`);

	const nameToComponent = new Map<string, ComponentRecord>();
	for (const c of components) {
		const norm = toIconName(c.name);
		if (!norm) continue;
		if (!nameToComponent.has(norm)) nameToComponent.set(norm, c);
	}
	const figmaNames = [...nameToComponent.keys()];
	log('discover', `${figmaNames.length} unique normalized icon names`);

	const existingTypeNames = new Set(readExistingTypesIconNames());
	const existingSpriteNames = readExistingSpriteSymbolNames();
	const alreadyKnown = new Set([...existingTypeNames, ...existingSpriteNames]);

	const newNames = figmaNames.filter((n) => !alreadyKnown.has(n));
	if (!newNames.length) {
		log('status', 'No new icons to add.');
		// Still ensure types include any existing sprite names (union)
		updateTypes([...alreadyKnown]);
		log('done', 'Complete.');
		return;
	}

	log('status', `${newNames.length} new icon(s): ${newNames.join(', ')}`);
	const newComponents = newNames.map((n) => nameToComponent.get(n)!).filter(Boolean);
	const imageUrlMap = await fetchSvgImages(newComponents);

	const newSymbols: { name: string; svg: string }[] = [];
	for (const comp of newComponents) {
		const url = imageUrlMap[comp.id];
		if (!url) {
			log('error', `No image URL for ${comp.name} (${comp.id})`);
			continue;
		}
		try {
			const raw = await downloadSvg(url);
			const optimized = optimizeSvg(raw, comp.name);
			newSymbols.push({ name: toIconName(comp.name), svg: optimized });
		} catch (e) {
			log('error', `Failed ${comp.name}: ${(e as Error).message}`);
		}
	}

	appendSymbolsToSprite(newSymbols);

	// Update types with union of previous + new
	const allNames = [...new Set([...alreadyKnown, ...newSymbols.map((s) => s.name)])];
	updateTypes(allNames);

	log('done', 'Icon update complete.');
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
