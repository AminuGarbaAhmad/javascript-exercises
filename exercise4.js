// QUESTION SIXTEEN SOLUTION:


let character = "5"

if (character >= "A" && character <= "Z") {
    console.log("UPPERCASE")

}else if (character >= "a" && character <= "z") {
    console.log("Lowercase")
}else{
    console.log("Neither")
}



// QUESTION SEVENTEEN SOLUTION:


let age = 25
let hasLicense = true

if (age >= 18 && hasLicense == false) {
    console.log("Can drive")
}else{
    console.log("Can not drive")
}


// QUESTION EIGHTEEN SOLUTION:


let totalAmount = 1000
let isMember = true

if (isMember == true) {
    console.log("your discounted amount is", 20 / 100 * totalAmount)
}else{
    console.log("your discounted amount is", 5 / 100 * totalAmount)
}


// QUESTION NINETEEN SOLUTION :

let number = 15


for (let divisibleBy3 = 1; divisibleBy3 <= number; divisibleBy3++) {
   
    if (divisibleBy3 % 3 == 0) {
        console.log(divisibleBy3);
        
    }
    
}

// QUESTION TWENTY SOLUTION:

let hour = 3

if (hour >= 5 && hour <= 11) {
    console.log("Good morning")
}else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon")
}else if (hour >= 18 && hour <= 21 || hour >= 22 && hour <= 4 ) {
    console.log("Good evening")
}else {
    console.log("Good night")
}