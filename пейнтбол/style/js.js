let canvas = document.querySelector("#canvas")
let ctx    = canvas.getContext("2d");
let scoreLeft = document.querySelector(".scoreLeft")
let scoreRight = document.querySelector(".scoreRight")
let width  = 10;
let height = 80;
let i      = 0;
let j      = 0;
let q      = 0;
let dx     = false;
let dy     = false;
let LeftY  = 0;
let RigthY = 0;
krug = {
    x:canvas.width/2-width/2,
    y:canvas.height/2
}

ctx.fillStyle = "red"
ctx.arc(krug.x,krug.y,10,0,Math.PI*2,true); 
ctx.fill();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


function main(){
    if(krug.x +i > canvas.width-10){
        i = 0;
        j = 0;
        q = 0;
        scoreLeft.innerHTML ++;
    }
    if(krug.x +i < 0){
        i = 0;
        j = 0;
        q = 0;
        scoreRight .innerHTML ++;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath()
    ctx.fillStyle = "red"
    ctx.arc(krug.x+i,krug.y+j,10,0,Math.PI*2,true); 
    ctx.fill();

    ctx.fillStyle ="blue"
    ctx.fillRect(10,canvas.height/2-height/2+LeftY,width,height)
    ctx.fillStyle = "green"
    ctx.fillRect(canvas.width-20,canvas.height/2-height/2+RigthY,width,height)

    
    if (krug.x+i == canvas.width-30  &&  krug.y+j < krug.y-height/2+RigthY+height+10 && krug.y+j > canvas.height - canvas.height/2-height/2+RigthY-10)
        { dx = true
            q= getRandomInt(1,4)} 

    if (krug.x+i == 30 && krug.y+j < krug.y-height/2+LeftY+height+10 && krug.y+j > canvas.height - canvas.height/2-height/2+LeftY-10) {dx = false
        q= getRandomInt(1,4)}
    

    if(dx){
        i -=5;
        
        console.log(j)
    }   else{
        i+=5
        
    }

    

    if (krug.y+j > canvas.height-10)
    { dy = true} 

    if (krug.y+j < 10) {dy = false}

    if(dy){
        j -= 5*q;
    }   else{
        j+=5*q;
    }
}

setInterval(main,30)


document.addEventListener("keydown",left);
document.addEventListener("keydown",rigth);

function left(item){
    if( LeftY<canvas.height- canvas.height/2 -40){
        if(item.keyCode == 83){
            LeftY +=20;
        }    
}
    if( LeftY>-canvas.height/2+40){
        if(item.keyCode == 87){
            LeftY -=20;
        }
    }
 

}
function rigth(item){
        console.log(RigthY)
        if( RigthY<canvas.height- canvas.height/2 - 40){
    
            if(item.keyCode == 40){
                RigthY +=20;
            }
        }
        if( RigthY>-canvas.height/2+40){
    
            if(item.keyCode == 38){
                RigthY -=20;
            }
        }
    
   

}
