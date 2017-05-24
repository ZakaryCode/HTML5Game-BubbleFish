/**
 * Created by Zakary on 2016/9/26.
 */
var energyObj = function () {
    this.alive = [];//bool
    this.x = [];
    this.y = [];
    this.l = [];
    this.spd = [];
    this.Energy = new Image;
    this.level = 1;
};
energyObj.prototype.num = 50;
energyObj.prototype.init = function () {
    for(var i = 0;i< this.num;i++){
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.01+0.05;
        this.bron(i);
    }this.Energy.src = "img/energyBall.png";
};
energyObj.prototype.set = function ( i ) {
        this.alive[i] = true;
        this.x[i] = 0;
        this.y[i] = 0;
        this.spd[i] = Math.random() * 0.01+0.05;
        this.bron(i);
};
energyObj.prototype.draw = function () {
    for(var i = 0; i < this.num ; i++ ){
        //draw
        //find an energy ,grow up
        if(this.alive[i]){
            if(this.l[i] < 14){
                this.l[i] += this.spd[i] * deltaTime;
            }else{
                this.y[i] -= 0.0025 * deltaTime;
            }
            ctx2.drawImage(this.Energy, this.x[i] - this.l[i] * 0.125 ,this.y[i] - this.l[i] * 0.025 , 0.155 * this.Energy.width + this.l[i] * 0.125 , 0.155 * this.Energy.height + this.l[i] * 0.125 );
        }
    }
};
energyObj.prototype.bron = function (i) {
    // var energyID = Math.floor(Math.random() * energy.num);
    this.x[i] = Math.random() * canWidth;
    this.y[i] = Math.random() * canHeight;
    this.l[i] = 0;
};
energyObj.prototype.dead = function (i) {
    this.alive[i] = false;
    this.set( i );
};