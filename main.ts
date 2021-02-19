function log(message) {
    console.log(message);
}
var message = 'Hello World';

log(message);

var number: number; //use type annotation when value of variable is not known ahead of time;
number = 1;

//number = 'aabc';

var number = 1;

enum Color { Red, Green, Blue };
let backgroundColor = Color.Blue;

var text;
text = 'abc';
let endsWithC = (<string>text).endsWith('c'); //type assertion
let alternativeWay = (text as string).endsWith('c'); //will not restructure the object in memory. Simply a way to tell the ts compiler to access intellisense;

let doLog = (message) => console.log('Message');
//let doLog = () => console.log(); for empty parameters;

interface Point {
    x: number,
    y: number
}

//let drawPoint = (point: {x:number, y: number}) => {   //inline annotations
let drawPoint = (point: Point) => {
    //.... some code;
}
let myPoint = {x: 1, y: 2};
drawPoint(myPoint);

interface LabeledValue {
    label: string;
  }
  
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

