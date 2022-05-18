let img;
let cnv;

var storecol = [];
var points = []; // empty array for starting points
var mult = 0.01; // to slow down the change in angle
//var angle =0;

function preload() {
  img = loadImage("assets/face1.jpeg");
}

function setup() {
  cnv = createCanvas(img.width, img.height);
  cnv.position(0, 0);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);

  var density = 20; //number of points in each row
  var space = width / density; // distance between each point

  //loop to create starting points
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      // var p = createVector(x, y);
      var p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
      var c = img.get(x, y);
      storecol.push(c);
    }
  }
}

function draw() {
  noStroke();

  // loop to iterate all points
  for (var i = 0; i < points.length; i++) {
    let z = img.get(points[i].x, points[i].y); 
   
    // i'm using the array wrong
    //let z = img.get(storecol[i].x, storecol[i].y); 
    fill(color(z));

    //angle at which each point will move
    //var angle = map(noise(points[i].x * mult, points[i].y * mult),0,1,0,720);

    var angle = cos(points[i].x) * 60;
    //angle = angle + 5 ;

    //vector to each point based on angle

    points[i].add(createVector(cos(angle), sin(angle)));

    ellipse(points[i].x, points[i].y, 3); //POINTS!!!
  }
}
