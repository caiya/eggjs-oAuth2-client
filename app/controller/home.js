'use strict';

const Controller = require('egg').Controller;

const client_id = 'hyewfbgawd'
const redirect_uri = 'http://127.0.0.1:7002/auth/redirect'
const state = 'state data is here'

class HomeController extends Controller {
  async index() {
    await this.ctx.render('oauth/login.html')
  }

  // 登录判断跳转
  async login(){
    this.ctx.redirect(`http://127.0.0.1:7001/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}`)
  }
}

module.exports = HomeController;
