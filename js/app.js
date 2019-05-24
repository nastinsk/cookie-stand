'use strict';

var workHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var stores = [];

function Store (name,minCustInHour, maxCustInHour, avgCookieSaleInHour ) {
  this.name = name;
  this.minCustInHour = minCustInHour;
  this.maxCustInHour = maxCustInHour;
  this.avgCookieSaleInHour = avgCookieSaleInHour;
  this.cookiesEachHour = [];
  this.totalCookiesOfTheDay;
  stores.push(this);
}

Store.prototype.randomCust = function () {
// I got this code from MDN math.random()
  return Math.floor(Math.random() * (this.maxCustInHour - this.minCustInHour + 1)) + this.minCustInHour;
};

Store.prototype.calkCookiesEachHour = function (){
  var total = 0;
  for (var i = 0; i < workHours.length; i++) {
    var cookiesRandom = Math.ceil(this.randomCust(this.minCustInHour, this.maxCustInHour)*(this.avgCookieSaleInHour));
    total+= cookiesRandom;
    this.cookiesEachHour[i] = cookiesRandom;
  }
  this.totalCookiesOfTheDay = total;
};

//head of table
var tableHeadHorizontal = document.getElementById('tableHeadHorizontal');
for (var i = 0; i < workHours.length; i++){
  var thEl = document.createElement('th');
  thEl.textContent = workHours[i];
  tableHeadHorizontal.appendChild(thEl);
}
thEl = document.createElement('th');
thEl.textContent = 'Total';
tableHeadHorizontal.appendChild(thEl);

//data rows in tableBody
Store.prototype.connectHtml = function () {
   
  //print store name in 1st column
  var table = document.getElementById('tableBody');
  var trEl = document.createElement('tr');
  table.appendChild(trEl);
  thEl = document.createElement('th');  //store name in table
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


var pike = new Store('1st and Pike', 23, 65, 6.3);
pike.randomCust();
pike.calkCookiesEachHour();
pike.connectHtml();
console.log(stores[0]);

var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
seaTac.randomCust();
seaTac.calkCookiesEachHour();
seaTac.connectHtml();
console.log(stores[1]);

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.randomCust();
seattleCenter.calkCookiesEachHour();
seattleCenter.connectHtml();
console.log(stores[2]);

var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
capitolHill.randomCust();
capitolHill.calkCookiesEachHour();
capitolHill.connectHtml();
console.log(stores[3]);

var alki = new Store('Alki', 2, 16, 4.6);
alki.randomCust();
alki.calkCookiesEachHour();
alki.connectHtml();
console.log(stores[4]);

//total for the each hour in all stores
var sumByHourArray = [];
for(var j=0; j<stores[0].cookiesEachHour.length; j++){
  var sumByHour=0;
  for( i = 0; i<stores.length; i++){
    sumByHour+= stores[i].cookiesEachHour[j];
    
  }
  sumByHourArray.push(sumByHour);
}
console.log(sumByHourArray);

//GRAND TOTAL SUM
var grandTotal = 0;
for(i=0; i<stores.length; i++){
  grandTotal+= stores[i].totalCookiesOfTheDay;
}
console.log(grandTotal);


//connect sum by hour array and html table
var tableFoot = document.getElementById('tableFoot');
var trEl = document.createElement('tr');
tableFoot.appendChild(trEl);
thEl = document.createElement('th');  //store name in table
thEl.textContent = 'Total';
trEl.appendChild(thEl);

//print in table hours total
for (i = 0; i < sumByHourArray.length; i++){
  var tdEl = document.createElement('td');
  tdEl.textContent = sumByHourArray[i];
  trEl.appendChild(tdEl);
}
tdEl = document.createElement('td');
tdEl.textContent = grandTotal;
trEl.appendChild(tdEl);
 







