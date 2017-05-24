/**
 * Created by Zakary on 2016/9/28.
 */
var starObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];
    this.NO = [];
    this.alpha;
};
starObj.prototype.num = 50;
starObj.prototype.init = function () {
    for(var i = 0;i < this.num; i++){
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = 20 +Math.random() * 25;
        this.NO[i] = Math.floor(Math.random() * 4);
    }
    this.alpha = 0;
};
starObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0005;
    var l = Math.sin(this.alpha);
    for(var i = 0; i < this.num ; i++){
        var no = this.NO[i];
        ctx2.drawImage(starPic[no], this.x[i] - 0.01125 * starPic[no].width - this.amp[i] * l * 0.025 ,this.y[i] - 0.01125 * starPic[no].height + this.amp[i] * l * 0.025 ,  0.0225 * starPic[no].width + this.amp[i] * l * 0.05, 0.0225 * starPic[no].height + this.amp[i] * l * 0.05);
    }
};