class BoxPink {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      rectMode(CENTER);

      if(this.body.speed<4.5) {
        rectMode(CENTER);
        fill("hotpink");
        rect(pos.x, pos.y, this.width, this.height);
      }

      else{
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility-4;
        tint(255, this.visibility);
        pop();
      }
    }
    score() {
      if (this.visibility < 0 && this.visibility > -600) {
        score++;
      }
    }
  }