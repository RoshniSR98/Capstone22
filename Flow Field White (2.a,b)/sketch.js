var points = []; // empty array for starting points

// mult is used to slow down the change in angle
var mult = 0.001; //2.a
//var mult= 0.005; //2.b

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(30);
  angleMode(DEGREES);
  noiseDetail(1);

  var density = 50; //number of points in each row
  var space = width / density; // distance between each point

  //loop to create starting points
  for (var x = 0; x < width; x += space) {
    for (var y = 0; y < height; y += space) {
      //var p = createVector(x, y);
      var p = createVector(x + random(-10, 10), y + random(-10, 10));
      points.push(p);
    }
  }
}

function draw() {
  noStroke();
  fill(255);

  // loop to iterate all points
  for (var i = 0; i < points.length; i++) {
    //angle at which each point will move
    var angle = map(
      noise(points[i].x * mult, points[i].y * mult),
      0,
      1,
      0,
      720
    );

    //vector to each point based on angle
    points[i].add(createVector(cos(angle), sin(angle)));

    ellipse(points[i].x, points[i].y, 1); //POINTS!!!
  }
}
