class Ball {

    constructor(x,y,w,h){

        var option = {
            restitution: 0.5
        }

        this.body = Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        World.add(myWorld,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        fill("yellow");
        ellipseMode(CENTER);
        ellipse(0,0,this.w,this.h)
        pop();
    }

}