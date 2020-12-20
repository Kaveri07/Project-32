class Polygon {
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          density: 0.7
      }
      this.image = loadImage("polygon.png");
      this.body = Bodies.circle(x,y,15,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.radius, this.radius);
    }
  }