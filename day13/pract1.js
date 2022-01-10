// 메서드 작성 시 매개변수의 기본값을 지정하자
function convertWeight(weight, ounces, roundTo) {
    const oz = ounces / 16 || 0;
    const total = weight + oz;
    const conversion = total / 2.2;
    const round = roundTo === undefined ? 2 : roundTo;

    return;
}

// 위 함수에서 ounces, roundTo의 값이 없거나 변경이 된다면 어떻게 대응할 것인가?
// ounces와 roundTo에 기본값을 지정해준다. 사용자가 별도의 ounces, roundTo를 지정하지 않는다면
// 아래의 함수는 각각 0, 2로 기본동작 할 것이다.
function convertWeight2(weight, ounces = 0, roundTo = 2) {
    const total = weight + (ounces / 16);
    const converstion = total / 2.2;

    // return some result
    return;
 
}