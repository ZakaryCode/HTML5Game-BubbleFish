/**
 * Created by Zakary on 2016/9/26.
 */
var thunderObj = function () {
    this.x = [];
    this.y = [];
    this.h = [];
    this.alive = [];//bool
};
thunderObj.prototype.num = 10;
thunderObj.prototype.init = function () {
    for(var i = 0;i< score.energyFlag;i++){
        this.bron( i );
    }
};
thunderObj.prototype.set = function ( i ) {
    this.bron( i );
};
thunderObj.prototype.draw = function () {
    var y1, y2;
    if(score.energyFlag > 0 && score.ThunderFlag && !score.Thunder){
        this.alive[i] = score.energyFlag;
        score.ThunderFlag = false;
    }
    if(this.alive[i] > 0){
        for( var i = 0; i < score.ThunderFlag ; i++){
            for( var j = 0; j < this.num ; j++){
                y1 = this.y[i];
                y2 = y1 + this.h[i];
                ctx2.save();
                ctx2.strokeStyle = "#152BA8";
                ctx2.lineWidth = parseInt(Math.random() * 10);
                ctx2.moveTo(this.x[i],y1);
                ctx2.lineTo(this.x[i],y2);
                ctx2.stroke();
                ctx2.restore();
                score.energyFlag--;
                this.alive[i]--;
                this.y[i] += score.level;
                if(score.energyFlag <= 0){
                    score.energyFlag = 0;
                    for(var i = 0; i < 7; i++){
                        score.energy[i] = 0;
                    }
                }
            }if(j == this.num)      break;
        }
        
        // console.log(score.energyFlag+"T");
    }
};
thunderObj.prototype.bron = function (i) {
    this.x[i] = parseInt(Math.random() * canWidth);
    this.y[i] = 0;
    this.h[i] = parseInt(Math.random() * 100);
    this.alive[i] = score.energyFlag;
};