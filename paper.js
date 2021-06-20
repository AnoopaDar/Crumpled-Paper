class Paper{
    constructor(x,y,radius){
        var options = {
          isStatic : false,
          restitution : 0.3,
          friction : 0,
          density : 1.2

        }
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(x,y,(radius-20)/2,options);
        this.radius = radius;
        

        World.add(world,this.body);
    }
    display(){
    var paperPos = this.body.position;
    push();
    translate(paperPos.x,paperPos.y);
    fill(255,0,255);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);
    pop();
    }
}