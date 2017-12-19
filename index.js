'use strict';

// npm run dev DO NOT read this file

require('egg').startCluster({
  baseDir: __dirname,
  port: process.env.PORT || 7002, // default to 7001
});
