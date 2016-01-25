<?php

class Foodlist {
  public function __construct($food) {
    $this->food = $food;
  }

  public function onlyMeat($exclude) {
    $meats = $this->food['meat'];
    $key = array_search($exclude,$meats);
    if($key!==false){
      unset($meats[$key]);
    }
    rsort($meats);
    $mlength = count($meats);
    for($x = 0; $x <  $mlength; $x++) {
      echo $meats[$x];
      echo "\n";
    }
    return $meats;
  }
}


$foods = array(
  'meat' => array('burgers', 'steak', 'sausages', 'kebabs'),
  'cake' => array('victorian', 'chocolate', 'fruit', 'fudge'),
);


$meats = new Foodlist($foods);

$meats->onlyMeat($exclude = "kebabs");

?>