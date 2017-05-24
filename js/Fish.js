/**
 * Created by Zakary on 2016/9/27.
 */
var fishObj = function () {
    this.x;
    this.y;
    this.angle;
    this.bigBody = new Image();

    this.TailTimer = 0;
    this.TailCount = 0;
    this.blinkTimer = 0;
    this.blinkCount = 0;
    this.blinkInterval = 1000;
};
fishObj.prototype.init = function () {
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    this.bigBody.src = 'src/bigSwim0.png';
};
fishObj.prototype.draw = function () {
    //lerp x,y
    this.x = lerpDistance( mouseX * 0.2, this.x, 0.75);
    this.y = lerpDistance( mouseY * 0.2, this.y, 0.75);
    //delta angle
    //Math.atan2(y, x)
    var deltaY = mouseY * 0.2 - this.y;
    var deltaX = mouseX * 0.2 - this.x;

    var beta = Math.atan2(deltaY , deltaX) + Math.PI;//-PI, PI
    //Lerp angle
    this.angle = lerpAngle(beta, this.angle, 0.25);
    //tail
    this.TailTimer += deltaTime;
    if(this.TailTimer > 50){
        this.TailCount = (this.TailCount + 1) % 8;
        this.TailTimer %= 50;
    }
    //blink
    this.blinkTimer += deltaTime;
    if(this.blinkTimer > this.blinkInterval){
        this.blinkCount = (this.blinkCount + 1) % 2;
        this.blinkTimer %= this.blinkInterval;
        if(this.blinkCount == 0){
            this.blinkInterval = Math.random() * 1500 +2000;
        }else {
            this.blinkInterval = 200;
        }
    }

    ctx1.save();
    ctx1.shadowBlur = 3;
    ctx1.shadowColor = 'white';
    ctx1.translate( this.x , this.y );
    ctx1.rotate(this.angle);
    // console.log(this.angle);
    var TailCount = this.TailCount;
    var blinkCount=this.blinkCount;
    ctx1.drawImage( EyePic[blinkCount] , -EyePic[blinkCount].width * 0.125 , -EyePic[blinkCount].height * 0.125 , EyePic[blinkCount].width * 0.25 , EyePic[blinkCount].height * 0.25 );
    ctx1.drawImage( this.bigBody , -this.bigBody.width * 0.125 , -this.bigBody.height * 0.125 , this.bigBody.width * 0.25 , this.bigBody.height * 0.25 );
    ctx1.drawImage( TaliPic[TailCount] , -TaliPic[TailCount].width * 0.125 + 7.5, -TaliPic[TailCount].height * 0.125 , TaliPic[TailCount].width * 0.25 , TaliPic[TailCount].height * 0.25 );
    ctx1.restore();
};