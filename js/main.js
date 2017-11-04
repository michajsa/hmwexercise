// var tacoBell = {
//   name : "Tacobell",
//   cost : 4.98,
//   meals : 25
//   earnedMoney : function() {
//     return this.cost * this.meals;
//   };
// };
//
// var celias = {
//   name : "Celias",
//   cost : 5.25,
//   meals : 20
//   earnedMoney : function() {
//     return this.cost * this.meals;
//   };
// };
//
// var sinaloas = {
//   name : "Sinaloas",
//   cost : 8,
//   meals : 15
//   earnedMoney : function() {
//     return this.cost * this.meals;
//   };
// };
// console.log(tacoBell, celias, sinaloas);
//
// var litObjectsArray = [tacoBell, celias, sinaloas];
// for (var i = 0; i < litObjectsArray.length; i++) {
//   console.log(litObjectsArray[i].earnedMoney());
// };


function Restaurants(name, cost, meals) {
  this.name = name;
  this.cost = cost;
  this.meals = meals;
  this.earnedMoney = function() {
    return this.cost * this.meals;
  };
};

var tacoBell = new Restaurants("Tacobell", 4.98, 25);
var celias = new Restaurants("Celias", 5.25, 20);
var sinaloas = new Restaurants("Sinaloas", 8, 15);
var constructorObjectArray = [tacoBell, celias, sinaloas];
for (var i = 0; i < constructorObjectArray.length; i++) {
  console.log(constructorObjectArray[i].earnedMoney());
};
// console.log(tacoBell, celias, sinaloas);
