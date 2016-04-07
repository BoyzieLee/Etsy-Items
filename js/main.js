// Show me how to calculate the average price of all items.

var allPrices = items.map(function (item) {
  return item.price;

});

function addUpItemPrices (previous, current){
  return previous + current;
}

var priceSum = allPrices.reduce (addUpItemPrices);

console.log(priceSum);
// we want to reduce the object prices, not the object. This is why we MAP. Map builds a new array based on what I tell it to return.

var avg = priceSum / items.length;

var final = avg.toFixed(2);

var answer1 = "The average price is $" + final;

console.log(final);

// Find my answere area in the DOM
var answer1Area = document.querySelector('#answer1');
// Put our answer on the page.
answer1Area.innerHTML = answer1
