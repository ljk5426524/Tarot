const apiUrlList = {
  // 本地研发环境
  local: 'http://jsonplaceholder.typicode.com',
  developer1: 'http://47.96.121.138:82', // developer1
  apiProxy: '/apiProxy', // developer1

  // 服务器环境
  dev: '/interface', // 开发
  test: '/interface', // 测试
  production: '/', // 生产
}

module.exports = {
  port: '8000',

  projectName: '塔罗牌',

  // h5 or cms web
  projectPlatform: 'h5',

  apiUrlList,

  env: {
    local: {
      name: 'local',
      api: apiUrlList['local'],
      publicPath: '/h5',
      routerPath: '/h5',
      showApiSelect: true,
    },
    development: {
      name: 'development',
      api: apiUrlList['dev'],
      publicPath: '/h5',
      routerPath: '/h5',
    },
    test: {
      name: 'test',
      api: apiUrlList['test'],
      publicPath: '/file/tarot',
      routerPath: '/file/tarot',
    },
    production: {
      name: 'production',
      api: apiUrlList['production'],
      publicPath: '/file/tarot',
      routerPath: '/file/tarot',
    },
  },
}
