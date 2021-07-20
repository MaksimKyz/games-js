let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
let x = 0;
let y = -50;
let dy = 0;
let dx = 20;
let size = 20;
let arr = [{x:0,y:0},{x:20,y:0},{x:40,y:0},{x:60,y:0},{x:80,y:0}]


let apple = [{x:getRandomInt(0,canvas.width), y:getRandomInt(0,canvas.height)}]
console.log(apple)

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((Math.random() * ((max/20) - min)))*20; //Максимум не включается, минимум включается
}


function draw() {
	ctx.fillStyle = "red";
	ctx.clearRect(0, 0, canvas.width, canvas.height);
   	arr[0].x = arr[arr.length-1].x+dx;
	arr[0].y = arr[arr.length-1].y+dy;
   	arr.push(arr[0]);
	
	arr.shift();
	for(let z =0;z<apple.length;z++){
	ctx.fillRect(apple[z].x,apple[z].y,20,20)
	}
	for(let t = 1;t<arr.length-1;t++){
		if (arr[arr.length-1].x == arr[t].x && arr[arr.length-1].y == arr[t].y) {
   			arr.splice(0,t);
   		}
	}
	
   	for(let i = 0; i<arr.length-1; i++){
   		ctx.fillStyle = "#0095DD";
   		ctx.fillRect(arr[i].x,arr[i].y,size,size);





   	arr.forEach(function(pob, i){
   		
		if (pob.x > Math.round(canvas.width / size) * size){ pob.x = 0;}    	
     	if (pob.y > Math.round(canvas.height / size) * size) pob.y = 0;
    	if (pob.x < 0) pob.x = Math.round(canvas.width / size) * size;
    	if (pob.y < 0) pob.y = Math.round(canvas.height / size) * size;
    	for(let j =0;j<apple.length;j++){
				if (pob.x == apple[j].x && pob.y == apple[j].y) {
    				

    				apple.splice(j,1)
    				apple.push({x:getRandomInt(0,canvas.width), y:getRandomInt(0,canvas.height)})
    				const newArr={x:arr[0].x+dx,y:arr[0].y+dy}
					arr.unshift(newArr)
					if (arr.length % 8 == 0) {

    					apple.unshift({x:getRandomInt(0,canvas.width), y:getRandomInt(0,canvas.height)})
    					console.log(apple)
    				}
   				}
		}
    	

  	
});
   	}
   
   	
    
}


setInterval(draw, 30);

document.addEventListener("keydown",function(item){
	if (item.keyCode ==40 && !(dy == -20)) {
		dy = 20;
		dx = 0;
	}
	if (item.keyCode ==39 && !(dx == -20)) {
		dy = 0;
		dx = 20;
	}
	if (item.keyCode ==37 && !(dx == 20)) {
		dy = 0;
		dx = -20;
	}
	if (item.keyCode ==38 && !(dy == 20)) {
		dy = -20;
		dx = 0;
	}
})

