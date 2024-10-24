const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infoSchema = new Schema({
  website: {
    type: String
  },
  message: {
    type: String
  }
})

const Info = mongoose.model('Info', infoSchema)
module.exports = Info