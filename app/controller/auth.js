'use strict';

const Controller = require('egg').Controller;

const client_id = 'hyewfbgawd'
const client_secret = 'fskefgtarwdbawydrawpdpaiuiawdtg'
const redirect_uri = 'http://127.0.0.1:7002/auth/redirect'

class AuthController extends Controller {

  // oAuth登陆成功后跳转，拿token换资源
  async redirect(){
    // 发送/token
    console.log(this.ctx.query)
    const result = await this.ctx.curl('http://127.0.0.1:7001/users/token', {
      dataType: 'json',
      // contentType: 'application/x-www-form-urlencoded', // 默认格式
      method: 'POST',
      timeout: 3000,
      data: {
        grant_type: 'authorization_code',
        code: this.ctx.query.code,
        state: this.ctx.query.state,
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: redirect_uri,
      }
    });
    this.ctx.body = result.data;
  }
}

module.exports = AuthController;
