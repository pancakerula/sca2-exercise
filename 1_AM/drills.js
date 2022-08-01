

const reverse = function(str) {
  // TODO - write a function which reverses the string
}



function factorial(num) {
  // TODO - write a function which returns the factorial of a positive integer
  // For example, 5! =5 * 4 * 3 * 2 * 1 = 120
  let i = num;
  let product = 1;
  while ( i > 0){
    product *= i;
    i -=1
  }
  return product;
}

console.log("FACTORIAL: " + factorial(4))

function announceDate() {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let cal = new Date();
  let year = cal.getFullYear();
  let month = cal.getMonth();
  let monthInText = 
  [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  let day = cal.getDate();
  let hour = cal.getHours();
  let minute = cal.getMinutes();
  let seconds = cal.getSeconds();
  let minute24 = minute;
  if (minute24 < 10){
    minute24 = "0" + minute
  }
  let ampm = ["AM","PM"]
  let ampmStatus = ampm;
  let hour24 = hour;
  let hour12 = hour24;
  let minute12 = minute24;
  // if the 24 hour clock has less than 12 hours
  if (hour24 < 12){
    // convert AMPM Status to AM
    ampmStatus = ampmStatus[0]
  }
  // if the 24 hour clock is greater than 12 hours 
  if (hour24 > 12){
    // subtract 12 hours to get to PM
    hour12 = hour24 - 12
    // convert AMPM Status to PM
    ampmStatus = ampmStatus[1]
  }
  let date = "Today's date is "+ monthInText[month] + " " + day + "th, " + year + ". For 24 hour time, it is " + hour24 + ":" + minute24 + ". For 12 hour time, it is " + hour12 + ":" + minute12 + " " + ampmStatus;
  return date;
}
const dateOn = announceDate();
console.log("DATE: " + dateOn);

const shiftRight = function(str, num) {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
}

const tokenize = function(str) {
  // TODO - write a function which converts a multi-word string into an array of words
}

const uniqueOnes = function(ary) {
  // TODO - write a function which returns the inputted array without duplicate elements
}

const zip = function(arr1, arr2) {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]

  // make a new array to put the zip array
  let zipArray = [];
  // if array length isn't equal
  if (arr1.length != arr2.length) {
    return "ZIP: " + -1
  // but if the array length is equal 
  }else{
    let i = 0;
    while (i != arr1.length){
      zipArray.push(arr1[i] + ", " + arr2[i])
      i += 1
    } 

    return "ZIP: " + zipArray
  }
  
}
console.log(zip([1,2,3],[5,3,1]))
const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`
}

// Write tests here:

