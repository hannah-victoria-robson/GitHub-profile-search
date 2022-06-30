const path = require('path')
const express = require('express')

const user = require('./routes/user')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/user', user)

module.exports = server
