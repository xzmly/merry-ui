const base = require('./jest.config.js')
module.exports = Object.assign({},base,{
  collectCoverage: false,
  reporters: ["default","jest-junit"]
})