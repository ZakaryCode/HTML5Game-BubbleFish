/**
 * Created by Zakary on 2016/9/26.
 */
var bubbleObj = function () {
    this.alive = [];//bool
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.bubbleNum = [];
    this.bubbleNumber = [];
    this.bubbleEnergy = [];
    this.level = 0;
};
bubbleObj.prototype.num = 1;
bubbleObj.prototype.init = function () {
    for(var i = 0;i< this.num;i++){
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.bubbleNum[i] = 0;
        this.bubbleNumber[i] = parseInt( Math.random() * 100 );
        this.spd[i] = Math.random() * 0.01+0.05;
        this.bubbleEnergy[i] = 0;
        this.bron(i);
    }
};
bubbleObj.prototype.draw = function () {
    if(this.level < score.level){
        this.init();
        this.level = score.level;
        this.num = 3 * this.level;
        if(this.num >= 10)
            this.num = 10;
    }
    ctx2.save();
    ctx2.shadowBlur = 7.5;
    ctx2.shadowColor = 'white';
    for(var i = 0; i < this.num ; i++ ){
        //draw
        //find an bubble ,grow up
        if(this.alive[i]){
            if(this.l[i] < 1000){
                this.l[i] += this.spd[i] * deltaTime;
                var k = this.l[i];
                if(k > 50)
                    k = 50;
            }else{
                this.y[i] -= 0.0025 * deltaTime;
                k = this.l[i];
                if(k > 50)
                    k = 50;
            }
            // console.log(bubblePic[this.bubbleNum[i]].src);
            ctx2.drawImage(bubblePic[this.bubbleNum[i]],  ane.headx[this.bubbleNumber[i]] * 0.75, ane.heady[this.bubbleNumber[i]] - this.l[i] * 0.15, 0.05 * bubblePic[this.bubbleNum[i]].width + k * 0.02225 , 0.05 * bubblePic[this.bubbleNum[i]].height + k * 0.02225 );
        }
    }ctx2.restore();
};
bubbleObj.prototype.bron = function (i) {
    // var bubbleID = Math.floor(Math.random() * bubble.num);
    this.x[i] = Math.random() * canWidth;
    this.y[i] = Math.random() * canHeight;
    this.bubbleNum[i] = parseInt( Math.random() * 7 );
    this.bubbleEnergy[i] = parseInt( Math.random() * 3 + 1);
    this.l[i] = 0;
};
bubbleObj.prototype.dead = function (i) {
    this.alive[i] = false;
};