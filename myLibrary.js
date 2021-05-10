
function isTouching(ob1,ob2){
    if(ob1.x-ob2.x<ob1.width/2+ob2.width/2&&
      ob2.x-ob1.x<ob1.width/2+ob2.width/2&&
      ob1.y-ob2.y<ob1.height/2+ob2.height/2&&
      ob2.y-ob1.y<ob1.height/2+ob2.height/2){
    return true;
    }else{
    return false;
    }
    
    
    }
    
    function bounceOff(object1,object2){
if(object1.x-object2.x<object1.width/2+object2.width/2&&
object2.x-object1.x<object1.width/2+object2.width/2){
object1.velocityX=object1.velocityX*(-1);
//object2.velocityX=object2.velocityX*(-1);
    }

if(object1.y-object2.y<object1.height/2+object2.height/2&&
object2.y-object1.y<object1.height/2+object2.height/2){
object1.velocityY=object1.velocityY*(-1);
//object2.velocityY=object1.velocityY*(-1);
}  
}
// using (ob1.velocityY/X=ob1.velocity.Y/X*(-1)//
// because if the velocity is positive it'll be negative (since 1*(-1)= -1)
// and if the velocity is negative , it'll be positive ( since -1*(-1)= 1)
