class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){

        let dx = a.x - b.y;
        let dy = a.y - b.y;
        return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        //return Math.hypot(dx,dy);
    }
}
let p1 = new Point(5, 5); 
let p2 = new Point(9, 8); 
console.log(Point.distance(p1, p2)); 