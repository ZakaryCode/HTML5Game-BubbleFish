/**
 * Created by Zakary on 2016/9/26.
 */
var lightObj = function () {
    this.alive = 0;
}
lightObj.prototype.drawLight = function () {
    if(score.energyFlag > 0 && score.ThunderFlag && score.Thunder){
        this.alive = score.energyFlag;
        score.ThunderFlag = false;
    }if(this.alive > 0){
        ctx2.save();
        var grd=ctx2.createRadialGradient(canWidth * 0.5 ,0 ,canHeight * 1.4 ,canWidth * 0.5 ,0 ,canHeight * 1.5 );
        grd.addColorStop(0,"rgba(240 ,240 ,80 ,0.3)");
        grd.addColorStop(1,"rgba(0 ,0 ,0 ,0)");
        ctx2.fillStyle=grd;
        ctx2.beginPath();
        ctx2.arc(canWidth * 0.5 ,0 ,canHeight * 1.5,0,Math.PI*2,true);
        ctx2.closePath();
        ctx2.fill();
        ctx2.restore();
        // console.log(score.energyFlag+"l");
        score.energyFlag--;
        this.alive--;
        if(score.energyFlag <= 0){
            score.energyFlag = 0;
            for(var i = 0; i < 7; i++){
                score.energy[i] = 0;
            }
        }
    }

};