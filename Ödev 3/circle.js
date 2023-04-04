const PI = Math.PI;

function circleArea(radius) {
  return PI * radius ** 2;
}

function circleCircumference(radius) {
  return 2 * PI * radius;
}

module.exports = { circleArea, circleCircumference };
