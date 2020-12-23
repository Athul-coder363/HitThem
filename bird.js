class bird
{
    constructor(x,y)
    {
        var option={
            restitution:0.8,
            friction:0.3,
            density:1.0
        };
        this.body=Bodies.rectangle(x,y,50,50,option);
        this.width=50;
        this.height=50;
        World.add(myworld,this.body);
    }
display()
{var pos=this.body.position;
    pos.x=mouseX;
    pos.y=mouseY;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("blue");
    fill("red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
}
};