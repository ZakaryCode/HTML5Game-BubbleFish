/**
 * Created by Zakary on 2016/9/23.
 */
var can1, can2;                                                 //画布标签获取
var ctx1, ctx2;                                                 //画布1 画布2
var lastTime, deltaTime;                                        //上次执行时间 两次时间间隔
var canWidth, canHeight;                                        //画布宽 画布高
var dustPic = [], starPic = [], cloudPic = [], bubblePic = [];  //漂浮物图片
var TaliPic = [], EyePic = [], BodyPic = [];                    //控制角色图片
var score, ane, wave, thunder, energy, bubble, cloud, star;     //游戏元素
var fish, mouseX, mouseY, dust;                                 //控制角色
var Game;
document.body.onload = game;
function game() {
    Game = new gameObj();
    Game.init();
}
function init() {
    can1 = document.getElementById("canvas01");
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById("canvas02");
    ctx2 = can2.getContext("2d");
    can1.addEventListener('mousemove', onMouseMove, false);

    canWidth =can1.width;
    canHeight =can1.height;
    score = new scoreObj();
    score.init();
    fish = new fishObj();
    fish.init();
    ane = new aneObj();
    ane.init();
    wave = new waveObject();
    wave.init();
    energy = new energyObj();
    energy.init();
    light = new lightObj();
    thunder = new thunderObj();
    thunder.init();
    cloud = new cloudObj();
    cloud.init();
    star = new starObj();
    star.init();
    mouseX = canWidth * 0.125;
    mouseY = canHeight * 0.125;
    for(var i =0; i < 15; i++){
        cloudPic[i] = new Image();
        cloudPic[i].src = "img/cloud" + i + ".png";
    }
    for(var i =0; i < 4; i++){
        starPic[i] = new Image();
        starPic[i].src = "img/star" + i + ".png";
    }
    for(var i =0; i < 7; i++){
        dustPic[i] = new Image();
        bubblePic[i] = new Image();
        dustPic[i].src = "img/dust" + i + ".png";
        bubblePic[i].src = "img/energy (" + i + ").png";
    }
    for(var i =0; i < 8; i++){
        TaliPic[i] = new Image();
        BodyPic[i] = new Image();
        TaliPic[i].src = "src/bigTail" + i + ".png";
        BodyPic[i].src = "src/bigSwim" + i + ".png";
    }
    for(var i =0; i < 2; i++){
        EyePic[i] = new Image();
        EyePic[i].src = "src/bigEye" + i + ".png";
    }

    bubble = new bubbleObj();
    bubble.init();
    dust = new dustObj();
    dust.init();
}
function gameloop() {
    window.requestAnimationFrame(gameloop);//setInterval,setTimeout()
    var now = Date.now();
    deltaTime =now - lastTime;
    lastTime = now;
    if(deltaTime > 40) deltaTime = 40;
    Game.draw();
    if(!Game.status){
        // console.log("False");
        drawBackground( score.level );
        ane.draw( score.level );
        energy.draw( score.level );
        bubble.draw( score.level );

        ctx1.clearRect(0 ,0 ,canWidth ,canHeight);
        fish.draw( score.level );
        wave.draw();

        if(score.level <=300)
            dust.draw();
        else if(score.level <=600)
            cloud.draw();
        else
            star.draw();
        score.levelUp();
        score.draw();
    }else {
        // console.log("True");
        drawBackground( score.level );
        ane.draw( score.level );
        energy.draw( score.level );
        bubble.draw( score.level );

        ctx1.clearRect(0 ,0 ,canWidth ,canHeight);
        fish.draw( score.level );
        energyCollision();
        bubbleCollision();
        Collision();
        light.drawLight();
        thunder.draw();
        wave.draw();

        if(score.level <=300)
            dust.draw();
        else if(score.level <=600)
            cloud.draw();
        else
            star.draw();
        score.levelUp();
        score.draw();
    }
}
function onMouseMove( e ) {
    if(e.offsetX || e.layerX){
        mouseX = e.offsetX ==undefined ? e.layerX : e.offsetX;
        mouseY = e.offsetY ==undefined ? e.layerY : e.offsetY;
        // console.log( mouseY);
    }
}