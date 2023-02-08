/**
 * @name 代理的配置
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * -------------------------------
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 *
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  dev: {
    '/v1/': {
      target: 'http://10.0.36.14:8080',
      changeOrigin: true,
      pathRewrite: { '^v1': '' },
    },
  },
  /**
   * @name 详细的代理配置
   * @doc https://github.com/chimurai/http-proxy-middleware
   */
  test: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/v1/': {
      target: 'http://10.0.36.14:8080',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/v1/': {
      target: 'http://10.0.36.14:8080',
      changeOrigin: true,
      pathRewrite: { '^v1': '' },
    },
  },
};
