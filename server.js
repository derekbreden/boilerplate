var express = require('express')
var app = express()
app.use(express["static"](__dirname + '/public'))

var port = process.env.PORT || process.env.HTTP_PORT || 8000
app.listen(port)
console.log('http://localhost:'+port+'/')
