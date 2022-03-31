class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(area) {
    if(area instanceof Square) {
      return square.side * square.side;
    } if(area instanceof Rectangle) {
        return rectangle.width * rectangle.height;
    } if(area instanceof Circle) {
        return circle.radius * circle.radius * 3.14;
    }
  } 
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));