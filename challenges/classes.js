// 1. Copy and paste your prototype in here and refactor into class syntax.
class cuboidMaker {
    constructor(length, height, width){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {return this.length * this.width * this.height};
    surfaceArea() {return (2 * (this.length * this.width + this.length * this.height + this.width * this.height))}
}

const cuboidClass = new cuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends cuboidMaker {
    constructor(length, height, width){
        super(length, height, width);
    }
    volume () {return this.length * this.height * this.width}
    surfaceArea() {return (6 * (this.length * this.height))}
}

const cube = new CubeMaker(5, 5, 5);

console.log(cube.volume());
console.log(cube.surfaceArea());