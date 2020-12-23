class Log
{
    constructor(x,y,height,logAngle)
    {
        var option={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        };
        this.body=Bodies.rectangle(x,y,20,height,option);
        this.width=20;
        this.height=height;
        Matter.Body.setAngle(this.body,logAngle);
        World.add(myworld,this.body);
    }
display()
{var pos=this.body.position;
    var rotateAngle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(rotateAngle);
    strokeWeight(4);
    stroke("red");
    fill("yellow");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
};