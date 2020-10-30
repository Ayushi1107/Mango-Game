class Mango {
    constructor(x, y,width,height) {
    var options = {
        'restitution':0,
            'friction':1,
            'isStatic':true

    }
    this.body = Bodies.circle(x, y,width,height,20,options);
    this.width
    this.height

    this.image=loadImage("mango.png")
      
      World.add(world, this.body);
    }

 display(){
    var pos =this.body.position;
    //var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    fill("orange")
     //rotate(angle);
    imageMode(CENTER)
    image(this.image,0,0,width,height,10,10)
    pop();
  
 } 
}