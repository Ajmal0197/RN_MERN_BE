const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },

  bio: {
    type: String,
    default: null
  },

  links: {
    type: Array,
    default: []
  },

  isDeleted: {
    type: Boolean,
    default: false
  },

  fcmToken: {
    type: String,
    default: null
  },

  deviceType: {type: String, default: null},
  token: {type: String, default: null}

})

module.exports = mongoose.model("User", userSchema)


