let img;
let cnv;
let angle = 0;
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
}

function draw(){
 for (let col = 0; col < img.width; col+=10) {
    for (let row = 0; row < img.height; row+=10) {
      let c = img.get(col, row);
      
      fill(color(c)); 
     
      //1.a
      //rect(col,row,10,10); 
      
      //1.b
      //ellipse(col,row,10,10); 
      
      //1.c
      //rect(col,row,random(10),random(10)); 
      
      angle = angle+5;
   }
  }
}
