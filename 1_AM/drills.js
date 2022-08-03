

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

function tokenize(str) {
  // TODO - write a function which converts a multi-word string into an array of words
  // well uh assuming you meant words with spaces i could probably attempt that


  // set a counter
  let i = 0;
  // set a scattered and organized into words array
  let scattered = str.split('');
  let wordShaper = [];
  let neatWords = [];
  // make a spaces to count how many spaces in the text
  function spaceFunction(str){
    let spacesCounter = 0;
    // for every letter in the string
    let i = 0;
    let scattered = str
    while (i != scattered.length){
      // if there is a space
      if (scattered[i] == " "){
        spacesCounter += 1
      }
      
      
      i += 1
    }
    console.log("TESTING FOR SPACE FUNCTION TEXT: " + scattered)
    console.log("TESTING FOR SPACE COUNTER: " + spacesCounter)
    return spacesCounter
  }

  let words = spaceFunction(scattered) ;

  // while counter isn't string length
  i = 0;
  let wordResetCounter = 0;

  while(i != words ){
    while (wordResetCounter != scattered.length){
      // if the char is not a space 
  
      if (scattered[wordResetCounter] != " "|| words - i == 0){
        // then put into word shapper to you know shape the word
        console.log("SCATTERED I FOR LOOKING THROUGH STRING TO SEE IF NOT SPACE: " + scattered[wordResetCounter])
        wordShaper.push(scattered[wordResetCounter])
        
        
      }
      // now if we found a space 
      else if (scattered[wordResetCounter] == " "){
        wordShaper = wordShaper.join('');
        console.log("WORDSHAPER ONCE WORD IS COMPLETE: " + wordShaper)
        // and then push the word into neat words fancy hehe
        neatWords.push(wordShaper);
        wordShaper = [];
        i += 1;
        console.log("I IS EQUAL TO: " + i)
      }
      
      wordResetCounter += 1;

      
      
      
    }  

  }
  if (words - i == 0){
    console.log("YES THE STATMENT PASSES")
    while (wordResetCounter != scattered.length){
      // then put into word shapper to you know shape the word
      console.log("SCATTERED I FOR LOOKING THROUGH STRING TO SEE IF NOT SPACE: " + scattered[wordResetCounter])
      wordShaper.push(scattered[wordResetCounter])
      wordResetCounter += 1;
      
      
    }
    wordShaper = wordShaper.join('');
    console.log("WORDSHAPER ONCE WORD IS COMPLETE: " + wordShaper)
    // and then push the word into neat words fancy hehe
    neatWords.push(wordShaper);
    wordShaper = [];
  }
  neatWords = neatWords.join(" ")
  return neatWords

}
console.log("NEAT WORDS: " + tokenize("What do I do"))
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
    return -1
  // but if the array length is equal 
  }else{
    // set the counter i to 0
    let i = 0;
    // while i is less then the first array's length, 
    // but it doesn't matter since first and second are 
    // now confirmed equal
    while (i < arr1.length){
      // push the first array and the second array based off of 
      // which order so like first and first, second and second
      zipArray.push(" " + arr1[i] + ", " + arr2[i] );
      // then you just add one to i so it isn't stuck on a while loop
      i += 1
    } 
    // then you return the array
    return zipArray
  }
  
}
console.log("ZIP: " + zip([1,2,3],[5,3,1 ]))


const unzip = function(arr) {
  // TODO - Write a function which does the opposite of `zip()`

  // first you take one arrray and you you uh split 
  // it into two pieces yeyah
  let arr1 = []
  let arr2 = []
  // now this isn't going to work unless you uh idk 
  // so you make sure it's even ok
  if (arr.length % 2 == 0){
    // you'll want to loop this the string length amount of times
    let i = 0;
    while (i < arr.length){
      arr1.push(" " + arr[i]);
      i += 1
      arr2.push(" " + arr[i] );
      i += 1
    }
    // once that's done you return the arr 1 and 2
    return "ARRAY 1:" + arr1 + " || ARRAY 2:" + arr2

  // but like if it isn't even then you return -1 cause i have no idea
  }else{
    return -1
  }
}

console.log("UNZIP: " + unzip([1,2,3,4]))
// Write tests here:

