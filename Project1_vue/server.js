const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')

const app = express()
app.use('/', serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 8080
app.listen(port)
console.log('server started ' + port)