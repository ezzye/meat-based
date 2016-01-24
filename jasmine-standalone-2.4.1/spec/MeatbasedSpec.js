"use strict";
describe("Foodlist",function() {

  var foodlist;
  var foodlist2;

  var foods = {
    meat: ['burgers', 'steak', 'sausages', 'kebabs'],
    cake: ['victorian', 'chocolate', 'fruit', 'fudge']
  };

  var meat = ['steak','sausages','burgers'];

  var foods2 = {
    meat: ['pork', 'beef', 'bacon', 'kebabs', 'ham', 'lamb'],
    cake: ['bakewell', 'chocolate', 'fruit', 'fudge'],
    sweet: ['humbugs','sherbert','gobstoppers','bubble-gum','pear-drops'],
    veg: ['lettuce','cabbage','carrots','beetroot']
  };

  var meat2 = ['pork','lamb','ham','beef','bacon'];


  beforeEach(function() {
    foodlist = new Foodlist(foods);
    foodlist2 = new Foodlist(foods2);
  });


  describe("only meat no kebabs", function() {

    it("should return an array of meats without a kebab in reverse alpha order", function() {
      expect(foodlist.onlyMeat()).toEqual(meat);
      expect(foodlist2.onlyMeat()).toEqual(meat2);
    });

  });



});