class Ball{
    constructor(x,y,r){
        var options={
            restitution:1}
            this.body=Bodies.circle(x,y,r,options)
            this.r=r;
            World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push()
        translate(pos.x,pos.y)
        ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r)
        pop()
    }
}