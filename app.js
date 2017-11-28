var express = require('express')
var app = express()
var router = require('./lib/controllers/router.js')(app);

//authorize
app.use(router);
//log

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})
