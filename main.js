/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


function isItLong(phrase) {
  if (phrase.length > 20){
  return "That's a long string!";
}else {
  return undefined
}
} 

function isItMedium(phrase) {
  if (phrase.length >= 10 && phrase.length <= 20){
  return "That's a regular sized string!"}
  else {
    return undefined
  }
}

function isItShort(phrase) {
  if (phrase.length < 10){
  return "That's a small string!"}
  else {
    return "That's not a small string!"
  }
}
function howLongIsMyString (phrase){
  if (phrase.length > 20){
    return "That's a long string!"
}else if (phrase.length >= 10 && phrase.length <= 20){
  return "That's a regular sized string!"}
  else if (phrase.length < 10){
    return "That's a small string!"}
  }
  
function instructorHeight (name){
    if (name === "Colin"){
    return 62
  }else if (name === "Mesuara"){
    return 67
  }else {
    return "I don't know that instructor!"
  }
}



/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}