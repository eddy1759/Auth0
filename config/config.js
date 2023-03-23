const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})

module.exports = {
    PORT: process.env.PORT || 1000,
    DB_URI: process.env.DB
}