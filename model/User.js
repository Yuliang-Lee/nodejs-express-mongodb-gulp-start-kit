const mongoose = require('mongoose');
const recDB = require('helper/mongodb').mainDB;

const UserSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  email: { type: String, default: '' },
  username: { type: String, default: '' },
  provider: { type: String, default: '' }
});

UserSchema.methods = {
  getAll: function (cb) {
    return this.find({}, cb);
  }
};

module.exports = recDB.model('User', UserSchema);
