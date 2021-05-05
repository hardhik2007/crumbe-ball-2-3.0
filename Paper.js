class Paper {
    constructor(x,y,r){
    
        var options={
           isStatic: false,
            restitution:0.3,
             density:2,
             friction : 0.5,
            }
            this.x = x
            this.y = y
            this.r = r
            this.body = Bodies.circle(this.x,this.y,this.r/2,options)
            this.image = loadImage("paper.png")
            World.add(world, this.body);
    }  
    display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    strokeWeight (3);
    //fill(255,0,255)
    
    pop()

    }
    
     }