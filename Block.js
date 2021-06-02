class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.visbility=255;
      this.image=loadImage("block.png");
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed<3){
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.width, this.height);
      }
      else{
        push();
        World.remove(world,this.body);
        this.visbility-=5;
        tint(255,this.visbility);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
        pop();

      }
    }
}