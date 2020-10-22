class Box {
    constructor (x,y,width,height){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height

        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World. add (world , this.body )
    }

    display(){

        var pos = this.body.position
        var angle = this.body.angle

        //change values
        push ();
        //to move
        translate(pos.x,pos.y)
        //to rotate
        rotate (angle)
        rectMode(CENTER)
        //fill("")
        rect(0,0, this.width,this.height)
        //retriving the value
        pop ();
    }

}