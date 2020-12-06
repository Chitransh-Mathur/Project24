class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      strokeWeight(4);
      rectMode(CENTER);
      fill("green");
      rect(400, 400, 800, 20);
    }
  };