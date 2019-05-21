'use strict';


var minCustList = document.getElementsByClassName('min');
var maxCustList = document.getElementsByClassName('max');
var avgCookiesList = document.getElementsByClassName('avg');
var showMinCust = [];
var showMaxCust = [];
var showAvgCookies = [];

for (var i = 0; i < minCustList.length; i++){
  showMinCust[i] = minCustList[i].textContent;
  showMaxCust[i] = maxCustList[i].textContent;
  showAvgCookies[i] = avgCookiesList[i].textContent;
}

//function for random numbers. The maximum is exclusive and the minimum is inclusive
var randomCustomers = function (minCust, maxCust) {
  var min = Math.ceil(minCust);
  var max = Math.floor(maxCust);
  var randomResult = Math.floor(Math.random() * (max-min)) + min;
  return Math.floor(Math.random() * (max-min)) + min;
};

var pike = {
  name: '1st and Pike',
  minCust:showMinCust[0], // min amount of cutomers per hour
  maxCust:showMaxCust[0],
  avgSale:showAvgCookies[0], //avrage cookie sale for 1 customer
  amountOfCust: randomCustomers,
  cookiesInHour: []
};

//check how random function works with array
// console.log(pike.amountOfCust(pike.minCust, pike.maxCust));

var seaTac = {
  name: 'SeaTac Airport',
  minCust:showMinCust[1], 
  maxCust:showMaxCust[1],
  avgSale:showAvgCookies[1],
  amountOfCust: randomCustomers,
  cookiesInHour: []
};

var seattleCenter = {
  name: 'Seattle Center',
  minCust:showMinCust[2], 
  maxCust:showMaxCust[2],
  avgSale:showAvgCookies[2],
  amountOfCust: randomCustomers,
  cookiesInHour: []
  

};

var capitolHill= {
  name: 'Capitol Hill',
  minCust:showMinCust[3], 
  maxCust:showMaxCust[3],
  avgSale:showAvgCookies[3],
  amountOfCust: randomCustomers,
  cookiesInHour: []
  
};

var alki = {
  name: 'Alki',
  minCust:showMinCust[4], 
  maxCust:showMaxCust[4],
  avgSale:showAvgCookies[4],
  amountOfCust: randomCustomers,
  cookiesInHour: []
};

//array of the stores objects
var stores = [pike, seaTac, seattleCenter, capitolHill, alki];

var total;
//function to count random amount of cookies for every hour and total amount
var randomCookies = function (stores){
  var j =6;
  total = 0;
  for (var i = 0; i < 15; i++) {
    //for 6am to 11am included
    if (i < 6) {
      var cookiesInHourAvg = stores.amountOfCust(stores.minCust, stores.maxCust)*Math.ceil(stores.avgSale);//random number of cookies for every hour
      total+= cookiesInHourAvg;
      stores.cookiesInHour[i] = `${j}am: ${cookiesInHourAvg} cookies`;
      j++;
      
    //for 12pm
    } else if (i === 6) {
      cookiesInHourAvg = stores.amountOfCust(stores.minCust, stores.maxCust)*Math.ceil(stores.avgSale);//random number of cookies for every hour
      total+= cookiesInHourAvg;
      stores.cookiesInHour[i] = `12pm: ${cookiesInHourAvg} cookies`;
            
    //for 1pm to 8pm included
    } else {
      cookiesInHourAvg = stores.amountOfCust(stores.minCust, stores.maxCust)*Math.ceil(stores.avgSale);//random number of cookies for every hour
      total+= cookiesInHourAvg;
      stores.cookiesInHour[i] = `${i-6}pm: ${cookiesInHourAvg} cookies`;
      j++;
    }
  } 
  stores.total = total;
 
};

//connecting with html with <ul #stores>
var storesList = document.getElementById('stores');

//loop to use function randomCookies in all elements of the 'stores' array 
for (var i = 0; i < stores.length; i++){
  randomCookies(stores[i]);
  // stores[i].total = total;
  console.log(stores[i].name);
  console.log (stores[i].cookiesInHour);
  console.log(`Store total:${stores[i].total}`);
  
//using the same loop to make a list with future hyperlinks of all the object.names on top of the html
  var liEl = document.createElement('li');
  liEl.textContent = `${stores[i].name}`;
  storesList.appendChild(liEl);
}

var storesList = document.getElementsByClassName('location');

//loop to show the random cookies result for each hour for each location in html
for (i = 0; i < stores.length; i++){
  var lhEl = document.createElement('lh');
  lhEl.textContent = `${stores[i].name} location`;
  storesList[i].appendChild(lhEl);
  
  for (var j=0; j < stores[i].cookiesInHour.length; j++){
    liEl = document.createElement('li');
    liEl.textContent = stores[i].cookiesInHour[j];
    storesList[i].appendChild(liEl);
  }

  liEl = document.createElement('li');
  liEl.textContent = `Total: ${stores[i].total} cookies`;
  storesList[i].appendChild(liEl); 


}
