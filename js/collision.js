/**
 * Created by Zakary on 2016/9/27.
 */
//碰撞检测
function energyCollision() {
    for(var i = 0; i < energy.num; i++){
        if(energy.alive[i]){
            //calculate Length
            var l = calLength2(energy.x[i] - energy.l[i] * 0.125 , energy.y[i] - energy.l[i] * 0.25, fish.x, fish.y);
            if(l < 900){
                //energy eaten
                energy.dead(i);
                score.count0();
                wave.born0(energy.x[i] - energy.l[i] * 0.125 , energy.y[i] - energy.l[i] * 0.25);
            }
        }
    }
}
function bubbleCollision() {
    for(var i = 0; i < bubble.num; i++){
        if(bubble.alive[i]){
            //calculate Length
            var l = calLength2(ane.headx[bubble.bubbleNumber[i]] * 0.75, ane.heady[bubble.bubbleNumber[i]] - bubble.l[i] * 0.15, fish.x, fish.y);
            if(l < 900){
                //bubble eaten
                bubble.dead(i);
                score.count1(bubble.bubbleEnergy[i], bubble.bubbleNum[i]);
                wave.born1(ane.headx[bubble.bubbleNumber[i]] * 0.75, ane.heady[bubble.bubbleNumber[i]] - bubble.l[i] * 0.15);
            }
        }
    }
}
function Collision() {
    var flag = true;
    for(var i = 0; i < 6; i++){
        for(var j = i+1; j < 7; j++){
            if(score.energy[i] != score.energy[j]){
                flag = false;
                break;
            }
        }
        if(!flag){
            break;
        }
    }
    if(score.energyFlag < 1000)
        score.ThunderFlag = false;
    else{
        score.ThunderFlag = true;
        if(Thunder.alive[i]){
            //var l = calLength2(ane.headx[bubble.bubbleNumber[i]] * 0.75, ane.heady[bubble.bubbleNumber[i]] - bubble.l[i] * 0.15, fish.x, fish.y);
            if(l < 900){
                //score.count1(bubble.bubbleEnergy[i], bubble.bubbleNum[i]);
            }
        }
    }
    score.Thunder = flag;
}