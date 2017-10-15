var express = require('express');
var config = require('../config');
var router = express.Router();
let jwt = require('jsonwebtoken');

// 토큰 인증 미들웨어
exports.authToken = function(req, res, next){

    let encode = req.headers.authorization;
    jwt.verify(encode, config.MAIL_KEY, function(err, decode){
        if(err){
            //throw new Error('token error' + err);
            res.send("error");
            console.log('Invalidate Token');
            return;
        }
        req.env = decode.data;
        console.log(req.env);
        next();
    });
};