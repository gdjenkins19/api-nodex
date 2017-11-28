module.exports = function(app) {

    var express = require('express')
    var router = express.Router()
    
    console.log(`Before = ${process.cwd()}`)

    require("./root")(router)
    require("./test")(router)

    console.log(`After = ${process.cwd()}`)
    
    return router;
};