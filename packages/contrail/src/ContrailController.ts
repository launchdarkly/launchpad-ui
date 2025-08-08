import type { ComponentMetadata } from './types';

import { generateDocsUrl, generateStorybookUrl } from './utils/attribution';

/**
 * Minimal vanilla JS tooltip system for LaunchPad Contrail
 * Provides hover tooltips with component information without React overhead
 */
export class ContrailTooltip {
	private tooltip: HTMLElement | null = null;
	private mouseOverHandler: (e: MouseEvent) => void;
	private mouseOutHandler: (e: MouseEvent) => void;
	private clickHandler: (e: MouseEvent) => void;
	private keyHandler: (e: KeyboardEvent) => void;
	private isEnabled = false;
	private hideTimeout: NodeJS.Timeout | null = null;

	constructor(
		private metadata: Record<string, ComponentMetadata>,
		private docsBaseUrl: string,
		private storybookUrl: string,
	) {
		this.mouseOverHandler = this.handleMouseOver.bind(this);
		this.mouseOutHandler = this.handleMouseOut.bind(this);
		this.clickHandler = this.handleDocumentClick.bind(this);
		this.keyHandler = this.handleKeyDown.bind(this);
	}

	enable() {
		if (this.isEnabled) return;
		this.isEnabled = true;
		document.addEventListener('mouseover', this.mouseOverHandler);
		document.addEventListener('mouseout', this.mouseOutHandler);
		document.addEventListener('click', this.clickHandler);
		document.addEventListener('keydown', this.keyHandler);
	}

	disable() {
		if (!this.isEnabled) return;
		this.isEnabled = false;
		document.removeEventListener('mouseover', this.mouseOverHandler);
		document.removeEventListener('mouseout', this.mouseOutHandler);
		document.removeEventListener('click', this.clickHandler);
		document.removeEventListener('keydown', this.keyHandler);
		this.hideTooltip();
	}

	private handleMouseOver(e: MouseEvent) {
		// Only show tooltips when Contrail is active
		if (!document.body.classList.contains('contrail-active')) {
			return;
		}

		// Cancel any pending hide timeout
		if (this.hideTimeout) {
			clearTimeout(this.hideTimeout);
			this.hideTimeout = null;
		}

		const target = e.target as HTMLElement;
		if (!target || typeof target.closest !== 'function') {
			return;
		}

		const lpElement = target.closest('[data-launchpad]') as HTMLElement;

		if (lpElement) {
			const componentName = lpElement.getAttribute('data-launchpad');
			if (componentName) {
				// Check if this component type should be shown based on current settings
				if (this.shouldShowComponent(componentName)) {
					this.showTooltip(e, componentName, lpElement);
				}
			}
		}
	}

	private shouldShowComponent(componentName: string): boolean {
		// Text and Heading components are hidden by default
		if (componentName === 'Text' || componentName === 'Heading') {
			// Only show if the contrail-show-text class is present
			return document.body.classList.contains('contrail-show-text');
		}

		// All other components are shown by default
		return true;
	}

	private handleMouseOut(e: MouseEvent) {
		const target = e.target as HTMLElement;
		const relatedTarget = e.relatedTarget as HTMLElement;

		// Don't hide if moving to tooltip or staying within same component
		if (
			relatedTarget &&
			typeof relatedTarget.closest === 'function' &&
			target &&
			typeof target.closest === 'function'
		) {
			if (
				relatedTarget.closest('.contrail-tooltip') ||
				relatedTarget.closest('[data-launchpad]') === target.closest('[data-launchpad]')
			) {
				return;
			}
		}

		// Add delay before hiding tooltip to allow mouse movement to tooltip
		this.hideTimeout = setTimeout(() => this.hideTooltip(), 300);
	}

	private handleDocumentClick(e: MouseEvent) {
		const target = e.target as HTMLElement;

		// Hide tooltip if clicking outside of any LaunchPad component or tooltip
		if (target && typeof target.closest === 'function') {
			if (!target.closest('[data-launchpad]') && !target.closest('.contrail-tooltip')) {
				this.hideTooltip();
			}
		} else {
			// Fallback for environments without closest method
			this.hideTooltip();
		}
	}

	private handleKeyDown(e: KeyboardEvent) {
		// Hide tooltip on Escape key
		if (e.key === 'Escape') {
			this.hideTooltip();
		}
	}

	private showTooltip(event: MouseEvent, componentName: string, _element: HTMLElement) {
		this.hideTooltip();

		const metadata = this.metadata[componentName];
		this.tooltip = this.createTooltip(componentName, metadata, event.clientX, event.clientY);
		document.body.appendChild(this.tooltip);

		// Add mouse enter handler to tooltip to keep it visible
		this.tooltip.addEventListener('mouseenter', () => {
			// Cancel any pending hide timeout
			if (this.hideTimeout) {
				clearTimeout(this.hideTimeout);
				this.hideTimeout = null;
			}
		});

		// Add mouse leave handler to tooltip itself
		this.tooltip.addEventListener('mouseleave', () => {
			this.hideTimeout = setTimeout(() => this.hideTooltip(), 200);
		});
	}

	private hideTooltip() {
		// Clear any pending hide timeout
		if (this.hideTimeout) {
			clearTimeout(this.hideTimeout);
			this.hideTimeout = null;
		}

		if (this.tooltip) {
			this.tooltip.remove();
			this.tooltip = null;
		}
	}

	private createTooltip(
		componentName: string,
		metadata: ComponentMetadata | undefined,
		mouseX: number,
		mouseY: number,
	): HTMLElement {
		const tooltip = document.createElement('div');
		tooltip.className = 'contrail-tooltip';

		// Calculate position to keep tooltip in viewport
		const tooltipWidth = 280;
		const tooltipHeight = 120; // approximate
		const margin = 8; // Smaller margin to keep tooltip closer

		let left = mouseX + margin;
		let top = mouseY - tooltipHeight / 2; // Center vertically relative to cursor

		// Adjust if tooltip would go off screen
		if (left + tooltipWidth > window.innerWidth) {
			left = mouseX - tooltipWidth - margin;
		}
		if (top < 10) {
			top = 10;
		}
		if (top + tooltipHeight > window.innerHeight) {
			top = window.innerHeight - tooltipHeight - 10;
		}

		tooltip.style.left = `${Math.max(10, left)}px`;
		tooltip.style.top = `${Math.max(10, top)}px`;

		// Generate URLs
		const docsUrl = metadata?.docsUrl || generateDocsUrl(componentName, this.docsBaseUrl);
		const storyUrl = this.storybookUrl
			? generateStorybookUrl(componentName, this.storybookUrl)
			: null;

		// Build tooltip content
		const packageName = metadata?.package || '@launchpad-ui/components';
		const description = metadata?.description || 'LaunchPad UI component';

		tooltip.innerHTML = `
			<div class="contrail-tooltip-header">
				<span class="contrail-tooltip-title">${componentName}</span>
				<span class="contrail-tooltip-package">${packageName}</span>
			</div>
			<div class="contrail-tooltip-description">${description}</div>
			<div class="contrail-tooltip-links">
				<a href="${docsUrl}" target="_blank" rel="noopener noreferrer" class="contrail-tooltip-link">
					📖 Docs
				</a>
				${
					storyUrl
						? `
					<a href="${storyUrl}" target="_blank" rel="noopener noreferrer" class="contrail-tooltip-link">
						📚 Storybook
					</a>
				`
						: ''
				}
			</div>
		`;

		return tooltip;
	}
}

/**
 * Settings panel for LaunchPad Contrail
 * Provides UI controls for customizing highlighting behavior
 */
class ContrailSettings {
	private panel: HTMLElement | null = null;
	private trigger: HTMLElement | null = null;
	private isVisible = false;
	private isDragging = false;
	private currentPosition: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';
	private settings = {
		showText: false,
	};

	constructor() {
		this.createTrigger();
	}

	private createTrigger() {
		this.trigger = document.createElement('button');
		this.trigger.innerHTML = '⚙️';
		this.trigger.title = 'Contrail Settings - Click for options, drag to move';

		// Position the trigger with CSS class
		this.updateTriggerPosition();

		// Click handler (only if not dragging)
		this.trigger.addEventListener('click', (_e) => {
			if (!this.isDragging) {
				this.togglePanel();
			}
		});

		// Drag handlers
		this.trigger.addEventListener('mousedown', (e) => this.handleDragStart(e));

		// Add click outside handler for panel
		document.addEventListener('click', (e) => {
			if (this.isVisible && !this.panel?.contains(e.target as Node) && e.target !== this.trigger) {
				this.hidePanel();
			}
		});
	}

	private handleDragStart(e: MouseEvent) {
		if (e.button !== 0) return; // Only left mouse button

		e.preventDefault();
		this.isDragging = true;

		// Hide panel while dragging
		this.hidePanel();

		// Add visual feedback
		if (this.trigger) {
			this.trigger.style.opacity = '0.8';
			this.trigger.style.transform = 'scale(1.1)';
			this.trigger.style.cursor = 'grabbing';
		}

		const handleDragMove = (e: MouseEvent) => {
			if (!this.isDragging || !this.trigger) return;

			// Update trigger position during drag (center on cursor)
			this.trigger.style.left = `${e.clientX - 16}px`;
			this.trigger.style.top = `${e.clientY - 16}px`;
			this.trigger.style.right = 'auto';
			this.trigger.style.bottom = 'auto';
		};

		const handleDragEnd = (e: MouseEvent) => {
			if (!this.isDragging || !this.trigger) return;

			// Reset drag state first
			this.isDragging = false;

			// Determine snap position based on final mouse position
			const snapPosition = this.getSnapPosition(e.clientX, e.clientY);
			this.currentPosition = snapPosition;

			// Clear all drag-related inline styles immediately
			this.trigger.removeAttribute('style');

			// Apply the new position using CSS classes
			this.updateTriggerPosition();

			// Clean up event listeners
			document.removeEventListener('mousemove', handleDragMove);
			document.removeEventListener('mouseup', handleDragEnd);

			// Small delay before allowing clicks again to prevent accidental triggers
			setTimeout(() => {
				this.isDragging = false;
			}, 150);
		};

		document.addEventListener('mousemove', handleDragMove);
		document.addEventListener('mouseup', handleDragEnd);
	}

	private getSnapPosition(
		x: number,
		y: number,
	): 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' {
		// Much more aggressive snapping - use thirds instead of halves for better corner bias
		const leftThreshold = window.innerWidth * 0.33; // Left third
		const rightThreshold = window.innerWidth * 0.67; // Right third
		const topThreshold = window.innerHeight * 0.33; // Top third
		const bottomThreshold = window.innerHeight * 0.67; // Bottom third

		const isLeft = x < leftThreshold;
		const isRight = x > rightThreshold;
		const isTop = y < topThreshold;
		const isBottom = y > bottomThreshold;

		// Prioritize corners, but if in middle zones, use simple left/right + top/bottom
		if (isTop && isLeft) return 'top-left';
		if (isTop && isRight) return 'top-right';
		if (isBottom && isLeft) return 'bottom-left';
		if (isBottom && isRight) return 'bottom-right';

		// For middle zones, use simple quadrant logic
		const centerX = window.innerWidth / 2;
		const centerY = window.innerHeight / 2;

		if (y < centerY) {
			// Top half
			return x < centerX ? 'top-left' : 'top-right';
		}
		// Bottom half
		return x < centerX ? 'bottom-left' : 'bottom-right';
	}

	private updateTriggerPosition() {
		if (!this.trigger) return;

		// Completely clear all inline styles to ensure CSS classes work
		this.trigger.removeAttribute('style');

		// Apply CSS class for position
		this.trigger.className = `contrail-settings-trigger contrail-settings-trigger--${this.currentPosition}`;

		// Add smooth transition for the snap animation using inline style (won't interfere with positioning)
		this.trigger.style.transition = 'all 0.2s ease-out';
		setTimeout(() => {
			if (this.trigger) {
				this.trigger.style.transition = '';
			}
		}, 200);
	}

	show() {
		if (!this.trigger) return;

		// Remove any existing triggers to prevent duplication
		const existingTriggers = document.querySelectorAll('.contrail-settings-trigger');
		existingTriggers.forEach((trigger) => trigger.remove());

		// Add the current trigger
		document.body.appendChild(this.trigger);
	}

	hide() {
		// Remove all trigger instances
		const allTriggers = document.querySelectorAll('.contrail-settings-trigger');
		allTriggers.forEach((trigger) => trigger.remove());

		this.hidePanel();
	}

	private togglePanel() {
		if (this.isVisible) {
			this.hidePanel();
		} else {
			this.showPanel();
		}
	}

	private showPanel() {
		this.hidePanel(); // Remove any existing panel

		this.panel = this.createPanel();
		document.body.appendChild(this.panel);
		this.isVisible = true;
	}

	private hidePanel() {
		if (this.panel) {
			this.panel.remove();
			this.panel = null;
		}
		this.isVisible = false;
	}

	private createPanel(): HTMLElement {
		const panel = document.createElement('div');
		panel.className = 'contrail-settings';

		// Position panel relative to trigger position
		this.updatePanelPosition(panel);

		panel.innerHTML = `
			<div class="contrail-settings-header">Contrail Settings</div>
			<div class="contrail-settings-option">
				<span class="contrail-settings-label">Show Text & Heading</span>
				<div class="contrail-toggle ${this.settings.showText ? 'active' : ''}" data-setting="showText">
					<div class="contrail-toggle-handle"></div>
				</div>
			</div>
		`;

		// Add toggle handlers
		const toggle = panel.querySelector('[data-setting="showText"]') as HTMLElement;
		toggle?.addEventListener('click', () => this.toggleSetting('showText'));

		return panel;
	}

	private updatePanelPosition(panel: HTMLElement) {
		// Reset positioning
		panel.style.top = '';
		panel.style.right = '';
		panel.style.bottom = '';
		panel.style.left = '';

		// Position relative to trigger
		switch (this.currentPosition) {
			case 'top-right':
				panel.style.top = '60px'; // Below trigger
				panel.style.right = '20px';
				break;
			case 'top-left':
				panel.style.top = '60px'; // Below trigger
				panel.style.left = '20px';
				break;
			case 'bottom-right':
				panel.style.bottom = '60px'; // Above trigger
				panel.style.right = '20px';
				break;
			case 'bottom-left':
				panel.style.bottom = '60px'; // Above trigger
				panel.style.left = '20px';
				break;
		}
	}

	private toggleSetting(setting: keyof typeof this.settings) {
		this.settings[setting] = !this.settings[setting];

		// Update UI
		if (this.panel) {
			const toggle = this.panel.querySelector(`[data-setting="${setting}"]`);
			if (toggle) {
				toggle.classList.toggle('active', this.settings[setting]);
			}
		}

		// Apply setting
		this.applySetting(setting);
	}

	private applySetting(setting: keyof typeof this.settings) {
		switch (setting) {
			case 'showText':
				document.body.classList.toggle('contrail-show-text', this.settings.showText);
				break;
		}
	}

	getSettings() {
		return { ...this.settings };
	}
}

/**
 * Main controller for LaunchPad Contrail functionality
 * Handles activation toggle and coordinates CSS highlighting with JS tooltips
 */
export class ContrailController {
	private tooltip: ContrailTooltip;
	private settings: ContrailSettings;
	private keyHandler: (e: KeyboardEvent) => void;

	constructor(
		private config: {
			shortcut: string;
			docsBaseUrl: string;
			storybookUrl: string;
			metadata: Record<string, ComponentMetadata>;
			enabled: boolean;
		},
	) {
		this.tooltip = new ContrailTooltip(config.metadata, config.docsBaseUrl, config.storybookUrl);
		this.settings = new ContrailSettings();
		this.keyHandler = this.handleKeyDown.bind(this);

		if (config.enabled) {
			this.enable();
		}
	}

	enable() {
		document.addEventListener('keydown', this.keyHandler);

		// Add click handler to toggle Contrail when clicked (useful for Storybook)
		document.addEventListener('click', this.handleClick.bind(this));

		this.tooltip.enable();
	}

	disable() {
		document.removeEventListener('keydown', this.keyHandler);
		document.removeEventListener('click', this.handleClick.bind(this));

		this.tooltip.disable();
		this.setActive(false);
	}

	destroy() {
		this.disable();
		// Clean up any active highlighting
		this.setActive(false);
	}

	private handleKeyDown(event: KeyboardEvent) {
		if (this.matchesShortcut(event, this.config.shortcut)) {
			event.preventDefault();
			this.toggle();
		}
	}

	private handleClick(event: MouseEvent) {
		// Only activate on double-click to avoid interfering with normal interactions
		if (event.detail === 2) {
			this.toggle();
		}
	}

	private matchesShortcut(event: KeyboardEvent, shortcut: string): boolean {
		const keys = shortcut.toLowerCase().split('+');
		const pressedKeys: string[] = [];

		if (event.ctrlKey || event.metaKey) {
			if (keys.includes('ctrl') && event.ctrlKey) pressedKeys.push('ctrl');
			if (keys.includes('cmd') && event.metaKey) pressedKeys.push('cmd');
			if (keys.includes('meta') && event.metaKey) pressedKeys.push('meta');
		}
		if (event.shiftKey && keys.includes('shift')) pressedKeys.push('shift');
		if (event.altKey && keys.includes('alt')) pressedKeys.push('alt');

		const letter = event.key.toLowerCase();
		if (keys.includes(letter)) pressedKeys.push(letter);

		// Check if all required keys are pressed
		return keys.every((key) => pressedKeys.includes(key)) && keys.length === pressedKeys.length;
	}

	private toggle() {
		const isActive = document.body.classList.contains('contrail-active');
		this.setActive(!isActive);
	}

	private setActive(active: boolean) {
		if (active) {
			document.body.classList.add('contrail-active');
			this.settings.show();
		} else {
			document.body.classList.remove('contrail-active');
			document.body.classList.remove('contrail-show-text'); // Reset text visibility
			this.settings.hide();
		}
	}
}
