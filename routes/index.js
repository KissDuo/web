var express = require('express');
var router = express.Router();
var Util = require('../public/javascripts/util.js');

/* 首页 */
router.get('/', function(req, res, next) {
  if(Util.checkAgentIsMobile(req)){
    res.render('mobile/index');
  }else{
    res.render('pc/index');
  }
});

module.exports = router;
