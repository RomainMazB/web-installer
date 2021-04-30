const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: (content, loaderContext) => {
          const { resourcePath, rootContext } = loaderContext;
          const relativePath = path.relative(rootContext, resourcePath);

          if (relativePath === 'src/assets/scss/_variables.scss') {
            return content;
          }

          return `@import "~@/assets/scss/variables.scss";\n${content}`;
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
  assetsDir: 'install/assets',
  indexPath: 'install.html',
  lintOnSave: false,
  productionSourceMap: false,
  publicPath: './',
};
