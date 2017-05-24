/**
 * Created by Zakary on 2016/9/28.
 */
var dustObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];
    this.NO = [];
    this.alpha;
};
dustObj.prototype.num = 25;
dustObj.prototype.init = function () {
    for(var i = 0;i < this.num; i++){
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = 20 +Math.random() * 25;
        this.NO[i] = Math.floor(Math.random() * 7);
    }
    this.alpha = 0;
};
dustObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0005;
    var l = Math.sin(this.alpha);
    for(var i = 0; i < this.num ; i++){
        var no = this.NO[i];
        ctx2.drawImage(dustPic[no], this.x[i] + this.amp[i] * l * 0.5, this.y[i] + this.amp[i] * l * 0.125,  0.155 * dustPic[no].width, 0.155 * dustPic[no].height);
    }
};