'use strict';

var workHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var stores = [];
var patData = [
  ['1st and Pike', 23, 65, 6.3],
  ['SeaTac Airport', 3, 24, 1.2],
  ['Seattle Center', 11, 38, 3.7],
  ['Capitol Hill', 20, 38, 2.3],
  ['Alki', 2, 16, 4.6],
];
var sumByHourArray = [];
var grandTotal = 0;
var tableHeadHorizontal = document.getElementById('tableHead');
var table = document.getElementById('tableBody');
var tableFoot = document.getElementById('tableFoot');
var formEl = document.getElementById('form');

//constructor function for stores
function Store (name,minCustInHour, maxCustInHour, avgCookieSaleForCust){
  this.name = name;
  this.minCustInHour = minCustInHour;
  this.maxCustInHour = maxCustInHour;
  this.avgCookieSaleForCust = avgCookieSaleForCust;
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
    var cookiesRandom = Math.ceil(this.randomCust(this.minCustInHour, this.maxCustInHour)*(this.avgCookieSaleForCust));
    total+= cookiesRandom;
    this.cookiesEachHour[i] = cookiesRandom;
  }
  this.totalCookiesOfTheDay = total;
};

//render tableBody with objects data
Store.prototype.connectHtml = function () {
  //print store names in 1st column
  var trEl = document.createElement('tr');
  table.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trEl.appendChild(thEl);

  //print table data
  for (var i = 0; i < this.cookiesEachHour.length; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesEachHour[i];
    trEl.appendChild(tdEl);
  }
  //print cookies total for the day
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalCookiesOfTheDay;
  trEl.appendChild(tdEl);
};

//function to make an object instance based on data that we have from Pat
function makingObjects (){
  var mystore;
  for (var a = 0; a < patData.length; a++){
    mystore = new Store(patData[a][0], patData[a][1], patData[a][2],patData[a][3]);
    mystore.randomCust();
    mystore.calkCookiesEachHour();
    mystore.connectHtml();
  }
}
makingObjects();

//total for the each hour in all stores
function addHourlySum (storesLength){
  for(var j = 0; j < stores[0].cookiesEachHour.length; j++){
    var sumByHour = 0;
    for(var i = 0; i<storesLength; i++){
      sumByHour+= stores[i].cookiesEachHour[j];
    }
    sumByHourArray[j]=sumByHour;
  }
}
addHourlySum(stores.length);

//GRAND TOTAL SUM FOR ALL STORES
function finalTotal () {
  for(var i = 0; i < stores.length; i++){
    grandTotal+= stores[i].totalCookiesOfTheDay;
  }
}
finalTotal();

//inserting data in Table head
function tableHead () {
  for (var i = 0; i < workHours.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = workHours[i];
    tableHeadHorizontal.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  tableHeadHorizontal.appendChild(thEl);
}
tableHead();

//connect sum of cookies sold in all stores each hour with html tableFoot
function tableFooter () {
  var trEl = document.createElement('tr');
  tableFoot.appendChild(trEl);
  var thEl = document.createElement('th');
  thEl.textContent = 'Total'; //inserting "total" as a string
  trEl.appendChild(thEl);

  for (var i = 0; i < sumByHourArray.length; i++){  //filling all totals data
    var tdEl = document.createElement('td');
    tdEl.textContent = sumByHourArray[i];
    trEl.appendChild(tdEl);
  }

  tdEl = document.createElement('td');  //grand total in table
  tdEl.textContent = grandTotal;
  trEl.appendChild(tdEl);
}
tableFooter();

//event listener and handler
formEl.addEventListener('submit', function(e){
  e.preventDefault();

  var newStore = [];
  var name = e.target.storeName.value;
  newStore.push(name);
  var minCustInHour = Number(e.target.min.value);
  newStore.push(minCustInHour);
  var maxCustInHour = Number(e.target.max.value);
  newStore.push(maxCustInHour);
  var avgCookieSaleForCust = Number(e.target.avg.value);
  newStore.push(avgCookieSaleForCust);
  patData.push(newStore);

  stores = [];
  sumByHourArray = [];
  grandTotal = 0;
  table.innerHTML = ' ';
  tableFoot.innerHTML = ' ';
  
  makingObjects();
  addHourlySum(stores.length);
  finalTotal();
  tableFooter();
});
