/**
 * Created by Zakary on 2016/9/26.
 */
function drawBackground( flag ) {
    var a = 0, b = 0, c = 0;
    if(flag <= 80){
        a = 0;
        b = 0;
        c = flag;
    }else{
        if(flag <= 160){
            c = 80 + parseInt((flag - 80)/4*3);
            b = flag - c;
            a = 0;
        }else if(flag <= 300){
            c = 160 + parseInt((flag - 160)/3*2);
            b = flag - c;
            a = 0;
        }else{
            c = 160 + parseInt((flag - 160)/3*2);
            b = parseInt((flag - c)/3*2);
            a = flag - b - c;
        }
    }
    ctx2.save();
    // console.log("rgb("+ a +", "+ b +", "+ c +")");
    // ctx2.drawImage(backgroundImage, 0, 0, canWidth, canHeight);
    ctx2.fillStyle = "rgb("+ a +", "+ b +", "+ c +")";
    ctx2.fillRect(0, 0, canWidth, canHeight);
    var d = parseInt((flag / 10 + 1) * 10);
    var grd=ctx2.createRadialGradient(canWidth * 0.5 ,-10 ,10,canWidth * 0.5 ,0 ,canHeight * 1.0 + 10);
    grd.addColorStop(0,"rgb("+ d +" ,"+ d +" ,"+ d +" )");
    grd.addColorStop(1,"rgba(0 ,0 ,0 ,0)");
    ctx2.fillStyle=grd;
    ctx2.beginPath();
    ctx2.arc(canWidth * 0.5 ,0 ,canHeight * 1 + 10,0,Math.PI*2,true);
    ctx2.closePath();
    ctx2.fill();
    ctx2.restore();
}