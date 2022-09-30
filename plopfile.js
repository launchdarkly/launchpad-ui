module.exports = (plop) => {
  plop.load('./.plop/actions/install-dependencies.js');

  plop.setGenerator('component', {
    description: 'A Launchpad UI component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your singular component name?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give a short description of the purpose of this component.',
      },
    ],
    actions: [
      /*
       * Component package
       */
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/README.md',
        templateFile: '.plop/templates/component/README.md.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/package.json',
        templateFile: '.plop/templates/component/package.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/tsconfig.build.json',
        templateFile: '.plop/templates/component/tsconfig.build.json.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/stories/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop/templates/component/story.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/__tests__/{{pascalCase name}}.spec.tsx',
        templateFile: '.plop/templates/component/spec.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/__tests__/{{pascalCase name}}.cy.tsx',
        templateFile: '.plop/templates/component/cy.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/src/{{pascalCase name}}.tsx',
        templateFile: '.plop/templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/src/index.ts',
        templateFile: '.plop/templates/component/src-index.ts.hbs',
      },
      {
        type: 'add',
        path: 'packages/{{dashCase name}}/src/styles/{{pascalCase name}}.css',
        templateFile: '.plop/templates/component/styles.css.hbs',
      },
      /*
       * Monorepo config
       */
      {
        path: 'tsconfig.json',
        pattern: /("paths": {)/g,
        template:
          '$1\n      "@launchpad-ui/{{dashCase name}}": ["./packages/{{dashCase name}}/src"],',
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: '"paths": {',
            closePatternStr: '    }',
            handleNonTrailingCommas: true,
          }),
      },
      /*
       * Core package integration
       */
      {
        path: 'packages/core/package.json',
        pattern: /("dependencies": {)/g,
        template: '$1\n    "@launchpad-ui/{{dashCase name}}": "workspace:~",',
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: '"dependencies": {',
            closePatternStr: '  },',
            handleNonTrailingCommas: true,
          }),
      },
      {
        path: 'packages/core/src/index.ts',
        pattern: /(plop start imports)/g,
        template: "$1\nexport * from '@launchpad-ui/{{dashCase name}}';",
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: 'plop start imports',
            closePatternStr: 'plop end imports',
          }),
      },
      /*
       * Local Remix integration
       */
      {
        path: 'apps/remix/package.json',
        pattern: /("dependencies": {)/g,
        template: '$1\n    "@launchpad-ui/{{dashCase name}}": "workspace:~",',
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: '"dependencies": {',
            closePatternStr: '  },',
            handleNonTrailingCommas: true,
          }),
      },
      {
        type: 'add',
        path: 'apps/remix/app/routes/components/{{dashCase name}}.tsx',
        templateFile: '.plop/templates/component/remix-example.tsx.hbs',
      },
      {
        path: 'apps/remix/app/root.tsx',
        pattern: /(plop start imports)/g,
        template:
          "$1\nimport {{camelCase name}}Styles from '@launchpad-ui/{{dashCase name}}/style.css';",
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: 'plop start imports',
            closePatternStr: 'plop end imports',
          }),
      },
      {
        path: 'apps/remix/app/root.tsx',
        pattern:
          /({ rel: 'stylesheet', href: [^\s]+ },\n)(?!.*({ rel: 'stylesheet', href: [^\s]+ },\n))/g,
        template: "$1    { rel: 'stylesheet', href: {{camelCase name}}Styles },\n",
        type: 'modify',
      },
      {
        path: 'apps/remix/app/data.server.ts',
        pattern: /(plop start components)/g,
        template: "$1\n    { to: 'components/{{dashCase name}}', name: '{{pascalCase name}}' },",
        type: 'modify',
        transform: (file) =>
          sortModification(file, {
            openPatternStr: 'plop start components',
            closePatternStr: 'plop end components',
          }),
      },
      {
        type: 'installDependencies',
        path: process.cwd(),
      },
    ],
  });
};

const sortModification = (file, params) => {
  const { openPatternStr, closePatternStr, handleNonTrailingCommas } = params;
  const lines = file.split('\n');
  let listOpenIndex;
  let listCloseIndex;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (typeof listOpenIndex === 'number' && typeof listCloseIndex === 'number') {
      break;
    }

    if (typeof listOpenIndex === 'number' && line.includes(closePatternStr)) {
      listCloseIndex = i;
    }

    if (typeof listOpenIndex !== 'number') {
      if (line.includes(openPatternStr)) {
        listOpenIndex = i;
      }
    }
  }

  const startLines = lines.slice(0, listOpenIndex + 1);
  let pathsLines = lines.slice(listOpenIndex + 1, listCloseIndex).sort();

  if (handleNonTrailingCommas) {
    pathsLines = pathsLines
      .map((line) => line.replace(',', ''))
      .map((line, i) => (i === pathsLines.length - 1 ? `${line}` : `${line},`));
  }

  const endLines = lines.slice(listCloseIndex, lines.length);

  const updatedFile = [...startLines, ...pathsLines, ...endLines].join('\n');

  return updatedFile;
};
