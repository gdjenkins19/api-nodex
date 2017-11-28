module.exports = function(controllerDirectories=[]) {

    controllerDirectories.push(__dirname)

    var fs = require('fs');
    var express = require('express')
    var router = express.Router()
    
    console.log(`Before = ${process.cwd()}`)

    controllerDirectories.forEach(function(controllerDir) {
        fs.readdir(controllerDir, function(err, fileNames) {
            for(fileName of fileNames) {
                if(fileName !== 'router_builder.js') {
                    console.log(`ControllerFile: ${controllerDir}/${fileName}`)
                    require(`${controllerDir}/${fileName}`)(router)
                }
            }
        });          
    });

    console.log(`After = ${process.cwd()}`)
    
    return router;
};