"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var circleList = [];
circleList.push(new Circle_1.Circle("yellow", 10));
circleList.push(new Circle_1.Circle("green", 15));
circleList.push(new Circle_1.Circle("blue", 20));
function showCircle(circle) {
    console.log("Hình tròn này có màu " + circle.color + " và bán kính là " + circle.radius);
}
circleList.forEach(showCircle);
