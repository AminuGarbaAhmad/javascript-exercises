//QUESTION ELEVEN SOLUTION

let  marks = 70

if (marks >= 90) {
    console.log("A");
}
else if(marks >= 80){
    console.log("B");
}
else if(marks >= 70){
    console.log("C");
}
else if(marks >= 60){
    console.log("D");
}
else if(marks < 60){
    console.log("F");
}


//QUESTION TWELVE SOLUTION

let  length = 5
let  width = 10

let area = length * width
let perimeter = 2 * (length + width)

console.log("The area is", area);
console.log("The Perimeter is", perimeter);


//QUESTION THIRTEEN SOLUTION

let  year = 2024

if (year % 400 == 0) {
    console.log("Leap year");
}
else if(year % 100 == 0 ){
    console.log("Not leap year");
}
else if(year % 4 == 0){
    console.log("Leap year");
}
else{
    console.log("Not leap year");
}


//QUESTION FOURTEEN SOLUTION

let  number = 47

if (number % 3 == 0 && number % 5 == 0) {
    console.log(" divisible by 5 and 5 ");
}

else if(number % 3 == 0 ){
    console.log("devisible by just 3");
}
else if(number % 5 == 0 ){
    console.log("devisible by just 5");
}
else{
    console.log("Divisible by neither 3 nor 5");
}


//QUESTION FIFTEEN SOLUTION

let  subject1 = 78
let  subject2 = 85
let  subject3 = 92

let average = (subject1 + subject2 + subject3)/3

if (average >= 90) {
    console.log("Excelent");
}

else if(average  >= 75){
    console.log("Good");
}
else if(average  >= 60){
    console.log("Average");
}
else{
    console.log("Needs improvement");
}
