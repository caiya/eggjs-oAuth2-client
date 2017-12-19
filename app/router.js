'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.all('/login', controller.home.login);
  router.get('/auth/redirect', controller.auth.redirect);
};
