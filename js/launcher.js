class launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.bodyB = bodyB;
        this.launcherObject = Constraint.create(options);
        World.add(world, this.launcherObject);
    }
    
    fly()
    {
        this.launcherObject.bodyA = null;
    }
     
    display()
    {
        if(this.launcherObject.bodyA)
        {
            var pointA = this.launcherObject.bodyA.position;
            var pointB = this.launcherObject.bodyB.position;
            strokeWeight(4);
            line(pointA.x, pointA.y, bodyB.x, bodyB.y);
        }
    }
    
}