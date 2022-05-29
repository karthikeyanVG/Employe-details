const { User } = require('../model/EmployeeDetails.model')
const { TE } = require('../services/util.service')

const getUniqueKeyFromBody = function (body) {
    var unique_key;
    if (typeof body.email != 'undefined') {
        unique_key = body.email
    } else if (typeof body.phone != 'undefined') {
        unique_key = body.phone
    } else {
        unique_key = null
    }

    return unique_key
}
module.exports.getUniqueKeyFromBody = getUniqueKeyFromBody

