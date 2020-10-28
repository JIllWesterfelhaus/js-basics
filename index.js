
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');

    }
}

const Circle1 = new Function('radius')

const another = new Circle(1);
