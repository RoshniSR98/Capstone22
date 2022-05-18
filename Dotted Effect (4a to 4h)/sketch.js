let image;
let points = [];
let colors = [];

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
      
      //4.e
      var p = createVector(x, y);

      //Random starting points
      //4.a,b,c,d
      //var p = createVector(x + random(-10, 10), y + random(-10, 10));

      points.push(p);
      colors.push(image.get(x, y));
    }
  }
}

function draw() {
  for (let i = 0; i < points.length; i++) {
    //fill(color(colors[i])); // Remove this for 4.h
     //noStroke();   //Remove this for 4.f,g,h 
    
    //4.h
    noFill(); 
    strokeWeight(2);
    stroke(colors[i]);
    
    let angle = map(
      noise(points[i].x * 0.005, points[i].y * 0.005),
      0,
      1,
      0,
      720
    );

    //4.a,g,h
    points[i].add(createVector(angle, angle));

    //4.b,c,d,e
    //points[i].add(createVector(angle*0.5, angle*0.5));

    //4.f
    //points[i].add(createVector(cos(angle), sin(angle)));
    

    ellipse(points[i].x, points[i].y, 5); //4.a,f
    //ellipse(points[i].x, points[i].y, 10); //4.b
    //ellipse(points[i].x, points[i].y, random(5)); //4.c
    //ellipse(points[i].x, points[i].y, random(10)); //4.d,e
  }
}
