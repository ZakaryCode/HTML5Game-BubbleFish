/**
 * Created by Zakary on 2016/9/28.
 */
var cloudObj = function () {
    this.x = [];
    this.y = [];
    this.amp = [];
    this.NO = [];
    this.alpha;
};
cloudObj.prototype.num = 10;
cloudObj.prototype.init = function () {
    for(var i = 0;i < this.num; i++){
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = 20 +Math.random() * 25;
        this.NO[i] = Math.floor(Math.random() * 15);
    }
    this.alpha = 0;
};
cloudObj.prototype.draw = function () {
    this.alpha += deltaTime * 0.0005;
    for(var i = 0; i < this.num ; i++){
        var no = this.NO[i];
        ctx2.drawImage(cloudPic[no], this.x[i] + this.amp[i] * this.alpha * 0.0325, this.y[i],  0.155 * cloudPic[no].width, 0.155 * cloudPic[no].height);
    }
};