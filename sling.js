class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
        this.pointB = pointB;
    }

    fly() {
        this.sling.bodyA = null
    }

    display(){
        if (this.sling.bodyA)
        {var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }
    
}