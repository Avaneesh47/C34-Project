var drawing = [];
var currentPath = [];

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  canvas.mousePressed(start);  
}

function draw() {
  background("yellow"); 
  
  if(mouseIsPressed){
    var point = {
      x:mouseX,
      y:mouseY
    }
    currentPath.push(point);
  }

  strokeWeight(10);
  noFill();
  stroke("black");

  for(var i = 0;i<drawing.length;i++){
    var path = drawing[i];
    beginShape();
    for(var j = 0;j<path.length;j++){
      vertex(path[j].x,path[j].y);
    }
    endShape();
  }
}

function start(){
  currentPath = [];
  drawing.push(currentPath);
}