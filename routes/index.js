var express = require('express');
var router = express.Router();
var Util = require('../public/javascripts/util.js');

/* 首页(小程序) */
router.get('/', function(req, res, next) {
  if(Util.checkAgentIsMobile(req)){
    res.render('mobile/index',{
      route : "index"
    });
  }else{
    res.render('pc/index',{
      route : "index"
    });
  }
});

/* app */
router.get('/app', function(req, res, next) {
  if(Util.checkAgentIsMobile(req)){
    res.render('mobile/app',{
      route : "app"
    });
  }else{
    res.render('pc/app',{
      route : "app"
    });
  }
});

module.exports = router;
