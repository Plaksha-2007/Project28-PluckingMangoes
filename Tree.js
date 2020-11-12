class Tree {
 constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("tree.png");
    World.add(world, this.body);
 }
 display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill(173,216,230);
    strokeWeight(0);
    imageMode(CENTER);
    image(this.image, pos.x,pos.y, 900, 900);
    image.scale = 0.12;
    rect(pos.x, pos.y, this.width, this.height);
 }
  }