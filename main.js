function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
var number; //use type annotation when value of variable is not known ahead of time;
number = 1;
//number = 'aabc';
var number = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
