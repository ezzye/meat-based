class Foodlist

  def initialize (food)
    @food = food
  end

  def onlyMeat
    return @food[:meat].sort! { |x,y| y <=> x }.delete_if {|item| item == "kebabs" }
  end

end