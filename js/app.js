'use strict';

var workHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var stores = [];
//variables for the future objects
var pike, seaTac, seattleCenter, capitolHill, alki;
var varArray = [pike, seaTac, seattleCenter, capitolHill, alki];
//array with data from Pat
var patData = [
  ['1st and Pike', 23, 65, 6.3],
  ['SeaTac Airport', 3, 24, 1.2],
  ['Seattle Center', 11, 38, 3.7],
  ['Capitol Hill', 20, 38, 2.3],
  ['Alki', 2, 16, 4.6]
];

//constructor function for stores
function Store (name,minCustInHour, maxCustInHour, avgCookieSaleInHour){
  this.name = name;
  this.minCustInHour = minCustInHour;
  this.maxCustInHour = maxCustInHour;
  this.avgCookieSaleInHour = avgCookieSaleInHour;
  this.cookiesEachHour = [];
  this.totalCookiesOfTheDay;
  stores.push(this);
}

//method for finding random number beetween min and max
Store.prototype.randomCust = function () {
// I got this code from MDN math.random()
  return Math.floor(Math.random() * (this.maxCustInHour - this.minCustInHour + 1)) + this.minCustInHour;
};

//method for calculating amount of cookies per hour and totals cookies of the day in this store
Store.prototype.calkCookiesEachHour = function (){
  var total = 0;
  for (var i = 0; i < workHours.length; i++) {
    var cookiesRandom = Math.ceil(this.randomCust(this.minCustInHour, this.maxCustInHour)*(this.avgCookieSaleInHour));
    total+= cookiesRandom;
    this.cookiesEachHour[i] = cookiesRandom;
  }
  this.totalCookiesOfTheDay = total;
};

//connect object data with rows in tableBody
Store.prototype.connectHtml = function () {
   
  //print store name in 1st column
  var table = document.getElementById('tableBody');
  var trEl = document.createElement('tr');
  table.appendChild(trEl);
  thEl = document.createElement('th');  
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  //print table data
  for (i = 0; i < this.cookiesEachHour.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  //print cookies total for the day
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesOfTheDay;
  trEl.appendChild(tdEl);
};

//loop to make an object instance based on data that we have from Pat
for (var a = 0; a < varArray.length; a++){
  varArray[a] = new Store(patData[a][0], patData[a][1], patData[a][2],patData[a][3]);
  varArray[a].randomCust();
  varArray[a].calkCookiesEachHour();
  varArray[a].connectHtml();
  console.log(varArray[a]);
}

//total for the each hour in all stores
var sumByHourArray = [];
for(var j = 0; j < stores[0].cookiesEachHour.length; j++){
  var sumByHour = 0;
  for( i = 0; i<stores.length; i++){
    sumByHour+= stores[i].cookiesEachHour[j];
  }
  sumByHourArray.push(sumByHour);
}
console.log(sumByHourArray);

//GRAND TOTAL SUM FOR ALL STORES
var grandTotal = 0;
for(i = 0; i < stores.length; i++){
  grandTotal+= stores[i].totalCookiesOfTheDay;
}
console.log(grandTotal);

//inserting data in Table head(horizontal)
var tableHeadHorizontal = document.getElementById('tableHeadHorizontal');
for (var i = 0; i < workHours.length; i++){
  var thEl = document.createElement('th');
  thEl.textContent = workHours[i];
  tableHeadHorizontal.appendChild(thEl);
}
thEl = document.createElement('th');
thEl.textContent = 'Total';
tableHeadHorizontal.appendChild(thEl);

//connect sum of cookies sold in all stores each hour with html tableFoot
//["total"] [    all data      ] [grandTotal]
var tableFoot = document.getElementById('tableFoot');
var trEl = document.createElement('tr');
tableFoot.appendChild(trEl);
thEl = document.createElement('th');  
thEl.textContent = 'Total'; //inserting "total" as a string
trEl.appendChild(thEl);

for (i = 0; i < sumByHourArray.length; i++){  //filling all totals data
  var tdEl = document.createElement('td');
  tdEl.textContent = sumByHourArray[i];
  trEl.appendChild(tdEl);
}

tdEl = document.createElement('td');  //grand total in table
tdEl.textContent = grandTotal;
trEl.appendChild(tdEl);
