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



// 2. SHOW ME HOW TO GET AN ARRAY of items that cost between $14.00 and $18.00 USD
//
// var itemsBetween = ['costLow', 'costHigh'];
//   costLow = 14;
//   costHigh = 18;

var itemsBetween = items.filter(function(item) {
  if (item.price >=14 && item.price <= 18) {
    return item.price
  }

});

var section2 = document.querySelector('#answer2');
console.log(section2);

itemsBetween.forEach(function(singleProduct) {
  console.log(itemsBetween);

  var htmlElem = document.createElement('p');

  var listItems = document.createTextNode(singleProduct.title);

  htmlElem.appendChild(listItems);

  section2.appendChild(htmlElem);

});

// var listAllBetween = items.map( function (item) {
//   return item.price;
// });
