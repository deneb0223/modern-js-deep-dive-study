// 아래의 함수는 생성자로 동작한다.
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function () {
        return this.radius;
    }
}

// 내부슬롯에는 [[CALL]], [[Construct]]이 있기 때문에 생성자 함수로 동작하게 된 것이다.