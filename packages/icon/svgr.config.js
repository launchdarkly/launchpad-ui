module.exports = {
  typescript: true,
  ref: true,
  filenameCase: 'pascal',
  dimensions: false,
  jsxRuntime: 'automatic',
  exportType: 'named',
  template: require('./template'),
  indexTemplate: require('./index-template'),
  outDir: 'src',
};
