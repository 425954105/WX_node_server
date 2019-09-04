const Router = require('koa-router')
const router = new Router()

const {PositiveIntegerValidator} = require('../../validators/validator')

const {HttpException, ParameterException} = require('../../../core/http-exception')

router.post(`/v1/:id/classic/latest`, (ctx, next) => {
    const path = ctx.param
    const query = ctx.request.query
    const headers = ctx.request.header
    const body = ctx.request.body

    const v = new PositiveIntegerValidator().validate(ctx)
    


    if (true) {
        // throw new Error('为什么错误')
        const error = new ParameterException('为什么错误', 300)
        throw error
    }
    ctx.body = { key: 'classic' }

})

module.exports = router