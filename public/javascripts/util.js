var Util = {};

//检测是否是移动端
Util.checkAgentIsMobile = function(req){
    var deviceAgent = req.headers["user-agent"].toLowerCase();
    var isMobile = deviceAgent.match(/(iphone|ipod|ipad|android)/);
    if(isMobile){
        return 1;
    }else{
        return 0;
    }
};

module.exports = Util;