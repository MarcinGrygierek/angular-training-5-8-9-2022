class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getPointsSquare() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}

export {
    Point
}