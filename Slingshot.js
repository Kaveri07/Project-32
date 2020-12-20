class SlingShot{
    constructor(bodyA, pointB){
        this.pointB = pointB;
        this.bodyA = bodyA;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(newBodyA) {
        this.sling.bodyA = newBodyA;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3);
            stroke("blue");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}