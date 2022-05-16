module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          removeTitle: false,
          removeDesc: false,
          removeUnknownsAndDefaults: { keepRoleAttr: true },
        },
      },
    },
    'removeDimensions',
  ],
  floatPrecision: 3,
};
