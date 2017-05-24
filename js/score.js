/**
 * Created by Zakary on 2016/9/28.
 */
var scoreObj = function () {
    this.num;
    this.energy = [];
    this.energyFlag = 0;
    this.level;
    this.flag;//关卡时间标记
    this.flagTime;//通关时间标记
    this.Thunder;//雷电标记
    this.ThunderFlag;//雷电标记量
};
scoreObj.prototype.init = function () {
    this.num = 0;
    this.energy = [];
    this.energyFlag = 0;
    this.level = 1;
    this.Thunder = false;
    this.ThunderFlag = false;
    for(var i = 0; i < 7; i++){
        this.energy[i] = 0;
    }this.flag = 0;
    this.flagTime = Date.now();
};
scoreObj.prototype.count0 = function () {
    var x = parseInt(this.level / 10 + 1);
    if(x <= 3)
        this.num += x;
    else
        this.num += 3;
};
scoreObj.prototype.count1 = function ( energy, flag ) {
    var x = parseInt(this.level / 10 + 1);
    this.num +=energy * x;
    // console.log(this.energyFlag + "=");
    // this.energyFlag++;
    // this.energy[flag]++;
    this.energyFlag += energy * x;
    this.energy[flag] += energy * x;

    // console.log(this.energyFlag);
};
scoreObj.prototype.levelUp = function () {
    var level = this.level;
    this.level = parseInt( Math.sqrt( score.num/30 )+ 1 );
    // console.log(this.level);
    if(level < this.level){
        this.flag = 25;
        this.flagTime = Date.now();
    }
};
scoreObj.prototype.draw = function () {
    var w = can1.width;
    var h = can1.height;

    if( this.flag ){
        ctx1.save();
        ctx1.fillStyle = "rgba(255, 255, 255,0.78)";
        ctx1.textAlign = "center";
        ctx1.font = "12px Arial";
        // console.log(console.log);
        ctx1.fillText("Level Up " + this.level, w * 0.5, h * 0.5);
        ctx1.restore();
        this.flag--;
    }
    ctx1.save();
    ctx1.fillStyle = "rgba(255, 255, 255,0.78)";
    ctx1.textAlign = "left";
    ctx1.font = "8px Arial";
    // console.log(console.log);
    ctx1.fillText("Energy: " + this.energyFlag, 2.5, h * 0.95 - 70);
    ctx1.fillText("Energy0: " + this.energy[0], 2.5, h * 0.95 - 60);
    ctx1.fillText("Energy1: " + this.energy[1], 2.5, h * 0.95 - 50);
    ctx1.fillText("Energy2: " + this.energy[2], 2.5, h * 0.95 - 40);
    ctx1.fillText("Energy3: " + this.energy[3], 2.5, h * 0.95 - 30);
    ctx1.fillText("Energy4: " + this.energy[4], 2.5, h * 0.95 - 20);
    ctx1.fillText("Energy5: " + this.energy[5], 2.5, h * 0.95 - 10);
    ctx1.fillText("Energy6: " + this.energy[6], 2.5, h * 0.95);
    ctx1.fillText("Energy: " + this.energyFlag, 2.5, h * 0.95 - 70);
    ctx1.fillText("Energy0: " + this.energy[0], 2.5, h * 0.95 - 60);
    ctx1.fillText("Energy1: " + this.energy[1], 2.5, h * 0.95 - 50);
    ctx1.fillText("Energy2: " + this.energy[2], 2.5, h * 0.95 - 40);
    ctx1.fillText("Energy3: " + this.energy[3], 2.5, h * 0.95 - 30);
    ctx1.fillText("Energy4: " + this.energy[4], 2.5, h * 0.95 - 20);
    ctx1.fillText("Energy5: " + this.energy[5], 2.5, h * 0.95 - 10);
    ctx1.fillText("Energy6: " + this.energy[6], 2.5, h * 0.95);
    ctx1.restore();
    ctx1.save();
    ctx1.fillStyle = "rgba(255, 255, 255,0.78)";
    ctx1.textAlign = "center";
    ctx1.font = "10px Arial";
    ctx1.fillText("Score:" + this.num, w * 0.5, h - 5);
    ctx1.fillText("Score:" + this.num, w * 0.5, h - 5);
    ctx1.restore();
    if(!Game.status){
        ctx1.save();
        ctx1.fillStyle = "rgba(255, 255, 255,0.78)";
        ctx1.textAlign = "center";
        ctx1.font = "15px Arial";
        // console.log(console.log);
        ctx1.fillText("YOU FAIL IN LEVEL " + score.level, w * 0.5, h * 0.5);
        ctx1.restore();
    }
};