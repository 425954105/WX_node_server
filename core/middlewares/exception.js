const {HttpException, ParameterException} = require('../http-exception')
const catchError = (ctx, next) => {
    try {
        await next();
    } catch (error) {
        // HTTP Status Code 2xx 4xx 5xx
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                error_code: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = error.status
        }
        else{
            ctx.body = { 
                keymsg: 'we made a mistake :-)',
                error_code: 999,
                request: `${ctx.method} ${ctx.path}`
            }
            ctx.status = 500
        }
        // ctx.body = '服务器有点问题，你等一下'

        // messages
        // error_code 详细 开发者自己定义 10001 20003
        // request_url 当前请求的url


        // 已知型错误 param int 'abc Lin
        // 处理错误，明确
        // 未知型错误 程序潜在错误 无意识
    }
};

module.exports = catchError