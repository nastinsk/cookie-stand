'use strict';

var workHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var stores = [];

function Store (name,minCustInHour, maxCustInHour, avgCookieSaleInHour ) {
  this.name = name;
  this.minCustInHour = minCustInHour;
  this.maxCustInHour = maxCustInHour;
  this.avgCookieSaleInHour = avgCookieSaleInHour;
  // this.amountOfCustomersEachHour = ; //method we will get using random function
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

var pike = new Store('1st and Pike', 23, 65, 6.3);
pike.randomCust();
pike.calkCookiesEachHour();
console.log(stores[0]);

var seaTac = new Store('SeaTac Airport', 3, 24, 1.2);
seaTac.randomCust();
seaTac.calkCookiesEachHour();
console.log(stores[1]);

var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
seattleCenter.randomCust();
seattleCenter.calkCookiesEachHour();
console.log(stores[2]);

var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);
capitolHill.randomCust();
capitolHill.calkCookiesEachHour();
console.log(stores[3]);

var alki = new Store('Alki', 2, 16, 4.6);
alki.randomCust();
alki.calkCookiesEachHour();
console.log(stores[4]);








