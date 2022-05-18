let img;
let cnv;
function preload() {
  img = loadImage("assets/face1.jpeg");
}
function setup() {
  cnv = createCanvas(img.width, img.height);
  //print(img.width, img.height);
  let newCanvasX = (windowWidth - img.width) / 2;
  let newCanvasY = (windowHeight - img.height) / 2;
  cnv.position(newCanvasX, newCanvasY);
  //access the pixel information of the image

  for (let col = 0; col < img.width; col += 2) {
    for (let row = 0; row < img.height; row += 2) {
      let xPos = col;
      let yPos = row;
      let c = img.get(col, row);
      push();
      translate(xPos, yPos);
      noFill();
      strokeWeight(random(3));
      stroke(color(c));
      //syntax: curve (x1,y1,x2,y2,x3,y3,x4,y4)
      curve(  sin(xPos),  cos(xPos),  random(80),  random(80),  sin(yPos) * random(80), cos(yPos),   random(80), random(80));
      
      pop();
    }
  }
}
