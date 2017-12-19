'use strict';

module.exports = appInfo => {
  const config = exports = {
    static: { // 配置静态文件请求
      prefix: '/',
    },
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.html': 'nunjucks',
      },
    }
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1513694525688_9377';

  // add your config here
  config.middleware = [];

  return config;
};
