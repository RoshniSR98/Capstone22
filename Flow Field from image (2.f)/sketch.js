let image;
let points = []; // stores the points
let colors = []; // stores the colours 

function preload() {
  image = loadImage("assets/face1.jpeg");
}

function setup() {
  createCanvas(image.width, image.height).position(0, 0);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);
  for (let x = 0; x < width; x += width / 50) {
    for (let y = 0; y < height; y += height / 50) {
      
      //Equidistant starting points
      var p = createVector(x, y); 
      
      //Random starting points
      //var p = createVector(x + random(-10, 10), y + random(-10, 10));
      
      points.push(p);
      colors.push(image.get(x, y));
    }
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    fill(color(colors[i]));
    noStroke();
    //noFill();
    //strokeWeight(1);
    //stroke(colors[i]);
    
    //2.f
    let angle = map(
      noise(points[i].x * 0.005, points[i].y * 0.005),
      0,
      1,
      0,
      720
    );

    
    points[i].add(createVector(cos(angle), sin(angle))); //original
    
    //var angle = cos(points[i].y) * 60;
    //var angle = cos(points[i].y) * i;

     //points[i].add(createVector(angle, angle));

    //points[i].add(createVector(cos(angle*i), sin(angle*i)));
    //points[i].add(createVector(-cos(angle), -cos(angle)));

    ellipse(points[i].x, points[i].y, 5);
  }
}
