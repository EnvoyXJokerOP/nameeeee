class Raindrops{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0,
            
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
       this.color=color("blue")
        World.add(world, this.body);
      }
      display(){
       
        push();
        fill(this.color)
        rectMode(CENTER)
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle)
       ellipse(0,0,this.radius, this.radius);
        pop();
      }
}