var express = require('express');
var mysql = require('mysql');
var config = require('../config');
var router = express.Router();
let emailHandler = require('../lib/emailHandler');

let pool = mysql.createPool({
  connectionLimit : 100, //important
  host: config.RDS.HOSTNAME,
  user: config.RDS.USERNAME,
  password: config.RDS.PASSWORD,
  database: config.RDS.DB_NAME

});

emailHandler.init(pool);
//API LIST
/*

HEAD / localhost:3000/api/mail/auth?id=1
HEAD/ localhost:3000/api/mail/project?id=1
HEAD / localhost:3000/api/mail/profile?id=1
HEAD / localhost:3000/api/mail/feed?id=1
HEAD / localhost:3000/api/mail/reply?id=1
POST / localhost:3000/api/mail/all
*/

router.head('/auth', (req, res) => {
  res.send();
  console.log('auth');
  return ;

  emailHandler.sendAuthMail(req, res);
});
router.head('/project', (req, res) => {
  res.send();
  console.log('project');
  return ;
  
  emailHandler.sendNotiMail(req, res, 'Project');
});
router.head('/profile', (req, res) => {
  res.send();
  console.log('profile');
  return ;
  
  emailHandler.sendNotiMail(req, res, 'Profile');
});
router.head('/feed', (req, res) => {
  res.send();
  console.log('feed');
  return ;
  
  emailHandler.sendNotiMail(req, res, 'Feed');
});
router.head('/reply', (req, res) => {
  res.send();
  console.log('reply');
  return ;
  
  emailHandler.sendNotiMail(req, res, 'Reply');
});
router.post('/all', (req, res) => {
  //getEmailList();
});

module.exports = router;
