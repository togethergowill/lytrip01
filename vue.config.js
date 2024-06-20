const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack');
const { VantResolver } = require('@vant/auto-import-resolver');
const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      }),
      // 当 unplugin-vue-components 版本小于 0.26.0 时，使用以下写法
      // AutoImport({ resolvers: [VantResolver()] }),
      // Components({ resolvers: [VantResolver()] }),
      // //当 unplugin-vue-components 版本大于等于 0.26.0 时，使用以下写法
      AutoImport.default({
        resolvers: [VantResolver()],
      }),
      Components.default({ resolvers: [VantResolver()] }),
    ],
  },
})
