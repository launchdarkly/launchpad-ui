module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'declaration-no-important': true,
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'declaration-block-no-duplicate-custom-properties': null,
    'hue-degree-notation': 'number',
    'alpha-value-notation': 'number',
  },
};
