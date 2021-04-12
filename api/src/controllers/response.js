'use strict'

module.exports = {

    format: (req, res, status, code, message, data) => {
        let responseBody = { code: code, message: message, reference: req.reference }
    
        if (data !== undefined) {
            responseBody['data'] = data
        } 
    
        res.status(status).json(responseBody)

        console.log(`[${req.reference}] :: ${code} - ${message}`)
    },

    success: (req, res, data) => module.exports.format(req, res, 200, `00`, `Success`, data),
    
    created: (req, res, data) => module.exports.format(req, res, 201, `00`, `Created`, data),
    
    badRequest: (req, res, message) => module.exports.format(req, res, 400, `80`, `Bad request : ${message}`),

    requiredParam: (req, res, paramName) => module.exports.format(req, res, 400, `81`, `Parameter '${paramName}' is required`),
    
    invalidParam: (req, res, paramName, message) => module.exports.format(req, res, 400, `82`, `Invalid parameter '${paramName}' : ${message}`),

    duplicateKey: (req, res, key) => module.exports.format(req, res, 400, `83`, `This '${key}' already exists`),

    forbidden: (req, res) => module.exports.format(req, res, 403, `97`, `Forbidden`),

    dataNotFound: (req, res) => module.exports.format(req, res, 404, `98`, `Data not found`),

    error: (req, res, message) => module.exports.format(req, res, 500, `99`, `${message}`),

}
