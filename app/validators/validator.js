const { LinValidator, Rule } = require('../../core/lin-validator')
class PositiveIntegerValidator extends LinValidator {
    constructor() {
        super()
        this.id = [
            //  可以定义多个rule 互相'且'关系
            new Rule('isInt', '需要是正整数', { min: 1 })
        ]
    }
}

module.exports = {
    PositiveIntegerValidator
}