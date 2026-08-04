// Ported from gonfalon's packages/oxlint-config/src/gonfalonOxlintPlugin.mjs.
// Only `no-for-in` is carried over (byte-identical rule implementation): it's the
// only custom rule referenced by launchpad-ui's .oxlintrc.json. `no-flag-purpose-read`
// and `no-blocking-route-loader` were dropped — see REPORT.md for justification.
const noForIn = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow for-in statements',
    },
    messages: {
      forbidden: 'for-in statements are not allowed.',
    },
    schema: [],
  },
  create(context) {
    return {
      ForInStatement(node) {
        context.report({
          node,
          messageId: 'forbidden',
        });
      },
    };
  },
};

// oxlint-disable-next-line import/no-default-export -- Oxlint's JS plugin loader requires a default export.
export default {
  meta: {
    name: 'gonfalon',
  },
  rules: {
    'no-for-in': noForIn,
  },
};
