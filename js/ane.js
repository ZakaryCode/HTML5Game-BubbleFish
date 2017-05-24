/**
 * Created by Zakary on 2016/9/27.
 */
var aneObj = function () {
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    this.amp = [];
    this.aphle = 0;
    this.alive = [];
};
aneObj.prototype.num = 100;
aneObj.prototype.init = function () {
    var h = can1.height * 0.5;
    for(var i = 0;i< this.num;i++){
        this.rootx[i] = i * 5 + Math.random() * 10;
        this.headx[i] = this.rootx[i];
        this.heady[i] = h + Math.random() * 25;
        this.amp[i] = Math.random() * 25 +25;
        this.alive[i] = true;
    }
};
aneObj.prototype.draw = function ( e ) {
    this.aphle += deltaTime * 0.0005;
    var l = Math.sin(this.aphle);
    ctx2.save();
    ctx2.globalAlpha = 0.6;
    ctx2.lineWidth = 5;
    ctx2.lineCap = "round";
    ctx2.strokeStyle = "#114200";
    e--;
    for(var i = 0; i < this.num; i++){
        //beginPath, moveTo, LineTo, stroke, strokeStyle, LineWidth, LineCap
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        this.headx[i]  =this.rootx[i] + l * this.amp[i];
        var cy = canHeight - 25 ,hy = this.heady[i];
        var s = (can1.height + 25) / 600;
        if(cy > e*s)  cy += e*s;
        if(hy > e*s)  hy += e*s;
        else        this.alive[i] = false;
        // console.log(this.heady[0]);
        if( this.alive[i] )
            ctx2.quadraticCurveTo(this.rootx[i], cy, this.headx[i], hy);
        ctx2.stroke();
    }ctx2.restore();
};