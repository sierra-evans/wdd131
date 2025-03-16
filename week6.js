//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');

let grades = ['A', 'B', 'A', 'C'];
let point;
let gpaPoints = grades.map(function(grade) {
    switch (grade) {
        case 'A':
            point = 4;
            break;
        case 'B':
            point = 3;
            break;
        case 'C':
            point = 2;
            break;
        case 'D':
            point = 1;
            break;
        case 'F':
            point = 0;
            break;
        default:
            alert('Not a valid grade.');
    }
    return point;
}) 

console.log(gpaPoints);

let totalPoints = gpaPoints.reduce(getTotal);

function getTotal(total, item) {
    return total + item;
}

console.log(totalPoints);

let gpaAverage = totalPoints/gpaPoints.length;
console.log(gpaAverage);

let fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

let shortFruit = fruit.filter((item) => item.length < 6);
console.log(shortFruit);

const myArray = [12, 34, 21, 54];
let luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);