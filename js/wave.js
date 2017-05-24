/**
 * Created by Zakary on 2016/9/28.
 */
var waveObject = function () {
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
    this.flag = [];
};
waveObject.prototype.num = 5;
waveObject.prototype.init = function () {
    for(var i = 0; i < this.num; i++){
        this.alive[i] = false;
        this.r[i] = 0;
    }
};
waveObject.prototype.draw = function () {
    ctx1.save();
    ctx1.lineWidth = 1;
    ctx1.shadowBlur = 10;
    for(var i = 0; i < this.num; i++){
        if(this.alive[i]){
            ctx1.save();
            this.r[i] += deltaTime * 0.01;
            if(this.r[i] > 30){
                this.alive[i] = false;
                break;
            }
            var alpha = 1 - this.r[i] / 30;
            //api
            ctx1.beginPath();
            ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
            ctx1.closePath();
            if(this.flag[i] == 0){
                ctx1.shadowColor = 'yellow';
                ctx1.strokeStyle = "rgba(255, 255, 255," + alpha + ")";
            }
            if(this.flag[i] == 1){
                ctx1.shadowColor = 'blue';
                ctx1.strokeStyle = "rgba(51, 0, 255," + alpha + ")";
            }

            ctx1.stroke();
            //draw
            // console.log(this.flag[i]);
            ctx1.restore();
        }
    }
    ctx1.restore();
};
waveObject.prototype.born0 = function (a, b) {
    for(var i = 0;i < this.num; i++){
        if(!this.alive[i]){
            this.flag[i] = 0;
            this.alive[i] = true;
            this.r[i] = 5;
            this.x[i] = a;
            this.y[i] = b;
            //born
            return;
        }
    }
};
waveObject.prototype.born1 = function (a, b) {
    for(var i = 0;i < this.num; i++){
        if(!this.alive[i]){
            this.flag[i] = 1;
            this.alive[i] = true;
            this.r[i] = 5;
            this.x[i] = a;
            this.y[i] = b;
            //born
            return;
        }
    }
};