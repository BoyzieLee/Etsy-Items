// 1. SHOW ME HOW TO CALCULATE the average price of all items.

// To get a sum of all prices, we first need all prices
// This `map` will give us an array of all prices
var allPrices = items.map( function (item) {
  return item.price;
});

// Now that I have all the prices, we can `reduce` them down to
// a single value, which is the sum of all prices
var priceSum = allPrices.reduce(function (prev, curr) {
  return prev + curr;
});

// Once we have the sum, we can divide by the number (length) of
// items we have
var avg = priceSum / items.length;

// Let's now round that to 2 decimals
var final = avg.toFixed(2);

// Finally, lets build our answer string
var answer1 = "The average price is $" + final;

// Find my "answer" area in the DOM
var answer1Area = document.querySelector('#answer1');

// Put our answer on the page
answer1Area.innerHTML = answer1;


/////////////////////////////////
// 2. SHOW ME HOW TO GET AN ARRAY of items that cost between $14.00 and $18.00 USD
//
// Old code
// var itemsBetween = ['costLow', 'costHigh'];
//   costLow = 14;
//   costHigh = 18;

// filter price
var itemsBetween = items.filter(function(item) {
  if (item.price >=14.01 && item.price <= 17.99) {
    return item.price
  }

});

// identify sectoin on HTML
var section2 = document.querySelector('#answer2');
// console.log(section2);

// iterate over results
itemsBetween.forEach(function(singleProduct) {
  // console.log(itemsBetween);

  // create html element
  var htmlElem = document.createElement('p');

  var listItems = document.createTextNode(singleProduct.title);

  htmlElem.appendChild(listItems);

  // post on page
  section2.appendChild(htmlElem);

});

// var listAllBetween = items.map( function (item) {
//   return item.price;
// });

/////////////////////////////////
// 3) Which item has a "GBP" currency code? Display it's name and price.

// identify currency code
let currency = items.filter(function(items) {
  return items.currency_code === "GBP";
  // console.log(currency);
});
// identify title
currency.forEach(function(code) {
  let answer3 = code.title + ' costs £18';

// identify html section on page
var section3 = document.querySelector('#answer3');

// post to page
  section3.innerHTML = answer3;
});

//////////////////////////////
// 4) Display a list of all items who are made of wood.
// function isBigEnough(element, index, array) {
//   return element >= 10;
// };

// function woodGoods(wood) {
//   return woodGoods >= 0;
// };

let woodGoods = items.filter(function(items ){
  // return items.materials === "wood";
  return items.materials.indexOf ('wood') >= 0;
});
  // console.log(woodGoods);
woodGoods.forEach(function(item) {
  // identify what's made of wood
  let answer4 = item.title + ' is made of wood';

  // identify section on html
  var section4 = document.querySelector('#answer4');

  // create html element
  var htmlElem = document.createElement('p');

  var woodGoods = document.createTextNode(items.title);

  htmlElem.appendChild(woodGoods);

// post to page
  section4.innerHTML = answer4;
});

////////////////////////////
// 5) Which items are made of eight or more materials? Display the name, number of items and the items it is made of.

// filter items needing 8 or more materials
var eightOrMore = items.filter(function(item) {
  return item.materials.length >= 8;
});

// iterate over what each item is
eightOrMore.forEach(function (num) {

  sectionFive = document.querySelector('#answer5');

  // itentify section on HTML
  var section5 = document.createElement('ul');

  // iterate over the item.materials
  num.materials.forEach(function(materials){
  });

  // display each items name
  var list = document.createElement('li');

  // display the number of each item
  var section5 = num.title + ' has' + num.materials.length + 'materials:';
  // list each item

  var eightOrMore = document.createTextNode(num.materials.length);

  // create HTML element
  sectionFive.appendChild(eightOrMore);

  // post on page
  sectionFive.appendChild(list);
});




////////////////////////////
// 6) How many items were made by their sellers?
let besties = items.filter(function(item){
  return item.who_made === "i_did";
});

// besties(function (items){
let answer6 = besties.length + ' were made by their sellers';
  // console.log(answer6);

var section6 = document.querySelector('#answer6');
// var besties = document.createTextNode(items.who_made);
section6.innerHTML = answer6;
