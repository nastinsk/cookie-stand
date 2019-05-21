'use strict';

var randomCustomers = function (minCust, maxCust) {
  var min = Math.ceil(minCust);
  var max = Math.floor(maxCust);
  var randomResult = Math.floor(Math.random() * (max-min)) + min;
  return Math.floor(Math.random() * (max-min)) + min;//The maximum is exclusive and the minimum is inclusive

}

var pike = {
  name: '1st and Pike',
  minCust:23, // min amount of cutomers per hour
  maxCust:65,
  avgSale:6.3, //avrage cookie sale for 1 customer
  amountOfCust: randomCustomers,
  cookiesInHour: []
};
//check how random function works with array
console.log(pike.amountOfCust(pike.minCust, pike.maxCust));


var seaTac = {
  name: 'SeaTac Airport',
  minCust:3,
  maxCust:24,
  AvgSale:1.2,
  amountOfCust: randomCustomers,
  cookiesInHour: []
};
console.log(seaTac.amountOfCust(seaTac.minCust, seaTac.maxCust));

var seattleCenter = {
  name: 'Seattle Center',
  minCust:11,
  maxCust:38,
  AvgSale:3.7,
  amountOfCust: randomCustomers,
  cookiesInHour: []

};
console.log(seattleCenter.amountOfCust(seattleCenter.minCust, seattleCenter.maxCust));

var capitolHill= {
  name: 'Capitol Hill',
  minCust:20,
  maxCust:38,
  AvgSale:2.3,
  amountOfCust: randomCustomers,
  cookiesInHour: []
};
console.log(capitolHill.amountOfCust(capitolHill.minCust, capitolHill.maxCust));

var alki = {
  name: 'Alki',
  minCust:2,
  maxCust:16,
  AvgSale:4.6,
  amountOfCust: randomCustomers,
  cookiesInHour: []
};
console.log(alki.amountOfCust(alki.minCust, alki.maxCust));



var j =6;
for (var i = 0; i < 15; i++) {
  //for 6am to 11am included
  if (i < 6) {
    var cookiesInHourAvg = pike.amountOfCust(pike.minCust, pike.maxCust)*Math.ceil(pike.avgSale);//random number of cookies for every hour
    pike.cookiesInHour[i] = `${j}am: ${cookiesInHourAvg}`;
    j++;
  //for 12pm
  } else if (i === 6) {
      cookiesInHourAvg = pike.amountOfCust(pike.minCust, pike.maxCust)*Math.ceil(pike.avgSale);//random number of cookies for every hour
      pike.cookiesInHour[i] = `12pm: ${cookiesInHourAvg}`;
  //for 1pm to 8pm
  } else {
      cookiesInHourAvg = pike.amountOfCust(pike.minCust, pike.maxCust)*Math.ceil(pike.avgSale);//random number of cookies for every hour
      pike.cookiesInHour[i] = `${i-6}pm: ${cookiesInHourAvg}`;
      j++;
  }
}

//check if array works
console.log (pike.cookiesInHour);


