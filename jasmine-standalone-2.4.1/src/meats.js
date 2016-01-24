"use strict";
function Foodlist(food) {
  this.food = food;
}

Foodlist.prototype.onlyMeat = function() {
  var kpos;
  kpos = this.food.meat.indexOf("kebabs");
  this.food.meat.splice(kpos,1);
  this.food.meat.sort(function(a,b) {
    if(b > a) {
      return 1;
    }
    if(b < a) {
      return -1;
    }
    return 0;
  });
  return this.food.meat;
};


