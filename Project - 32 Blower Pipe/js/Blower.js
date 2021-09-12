class Blower {

    constructor(x,y,w,h){

        var option =  {
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,w,h,option);
        this.w = w;
        this.h = h;
        World.add(myWorld,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        fill("green");
        rectMode(CENTER);
        rect(0,0,this.w,this.h)
        pop();
    }

}