const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let emailSchema = new Schema({
  name__: {
    type: String
  },
  surname__: {
    type: String
  },
  email__: {
    type: String
  },
  company__name_: {
      type: String
  },
  contact__message_: {
    type: String
  },
  terms: {
    type: Boolean
  }
}, {
    collection: 'emails'
  })

module.exports = mongoose.model('Email', emailSchema)