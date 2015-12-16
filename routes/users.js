const express = require('express');
const User = require('model/User');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/list', function(req, res, next) {
  //var users = user.getAll(function (err, docs) {
  //  console.log(err);
  //  console.log(docs);
  //});
  User.find(function (err, users) {
    res.render('user/list', {users: users});
  });
});

router.post('/user', function(req, res, next) {
  const user = new User(req.body);
  user.save(function (err, user, numAffected) {
    if(err) {
      console.log('save error!!');
    }
    //res.redirect('/users/list');
    res.send(user);
  });
});

module.exports = router;
