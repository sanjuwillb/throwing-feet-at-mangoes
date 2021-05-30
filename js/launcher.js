class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:20
        }
        this.pointB = pointB
        this.chain = Constraint.create(options);
        World.add(world, this.chain)
    }
    fly(){
        this.chain.bodyA = null
    }
    display(){
        if (this.chain.bodyA){
            push()
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            stroke("white")
            strokeWeight(4)
            line(pointA.x, pointA.y, pointB.x, pointB.y)
            pop()
        }
    }
}