/**
 * Created by Zakary on 2016/9/28.
 */
var gameObj = function () {
    this.TimeOut;
    this.status = true;
};
gameObj.prototype.init = function () {
    if(this.status){
        init();
        lastTime = Date.now();
        deltaTime =0;
        gameloop();
        this.TimeOut = Date.now();
    }
};
gameObj.prototype.draw = function () {
    var time = Date.now();
    var s = time -score.flagTime;
    // console.log(s);
    if(s > score.level * 10000){
        this.status = false;
    }
};