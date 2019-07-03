const Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('build/')
  .setPublicPath('/eleventy-encore/build')
  .setManifestKeyPrefix('build')
  .addEntry('app', './js/app.js')
  .enableSingleRuntimeChunk()
  .enableSourceMaps(!Encore.isProduction())
  .enableSassLoader()
  .autoProvidejQuery()
;

if (Encore.isProduction()) {
  Encore
    .cleanupOutputBeforeBuild()
    .enableVersioning()
  ;
}

module.exports = Encore.getWebpackConfig();
