let pick_buffer;


function setup(){

createCanvas(800,600,WEBGL);
pick_buffer= createGraphics(800,600,WEBGL);
pick_buffer.clear();
pick_buffer.background(255,0,0);
//createEasyCam();

//texture_buffer

}

function draw(){
background(0);
let starX =0;
let starY =0；
let starZ = 0;
let endX = 200;
let endY = 200;
let endZ = 200;
let c1X = 25;
let c1Y = 100;
let c1Z = 58;
let c2X = 175;
let c2Y = -50;
let c2Z = -38;
strake(255);
strokeWeight(2);
nofall();
bezier(starX,starY,starZ,endX,endY,endZ,c1X,c1Y,c1Z,c2X,c2Y,c2Z);

 //texture(texture_img);
box(200);
}