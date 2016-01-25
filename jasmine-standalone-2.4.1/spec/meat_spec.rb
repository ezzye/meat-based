require 'meat.rb'

describe Foodlist do
  foods = {
    meat: ['burgers', 'steak', 'sausages', 'kebabs'],
    cake: ['victorian', 'chocolate', 'fruit', 'fudge']
  }

 foodlist = Foodlist.new(foods)

  it "should return an array of meats without a kebab in reverse alpha order" do
    expect(foodlist.onlyMeat).to eq(['steak','sausages','burgers'])
  end

end