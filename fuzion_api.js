module.exports = function(config={}) {
  var express = require('express')
  var app = express()
  var router = require('./lib/controllers/router_builder.js')(config.controllers);
  
  //authorize
  app.use(router);
  //log
  
  app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
  })
};
