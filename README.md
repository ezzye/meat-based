# meat-based
Short meat-based task (PHP, Javascript, Ruby)

example PHP array:

```
$foods = array(

  'meat' => array('burgers', 'steak', 'sausages', 'kebabs'),

  'cake' => array('victorian', 'chocolate', 'fruit', 'fudge'),

);
```

Create a function that takes an array of this kind as an argument, and then return an array of just the meat values, in reverse alphabetical order.

The array could contain any number of elements and in any order, but there will always be a food array called 'meat' like the one above.

We're not too keen on kebabs in the meat array though, so be sure not to include that in the returned array.

If we passed in the above array into the function, the array that is returned would contain: steak, sausages and burgers, in that order.

Use PHP 5.4 notation for the array.

Make sure your file can be executed from the command line: php meats.php 

Approach:

##PHP

Use meat key to get meat array then remove the kebab item and output resulting array.

## Javascript

The foods array would be written as follows in JavaScript as a object:

```
var foods = {
  meat: ['burgers', 'steak', 'sausages', 'kebabs'],
  cake: ['victorian', 'chocolate', 'fruit', 'fudge']
};
```

## Ruby

The food array would be written as follows in Ruby as a hash:

```
foods = {
  meat: ['burgers', 'steak', 'sausages', 'kebabs'],
  cake: ['victorian', 'chocolate', 'fruit', 'fudge']
}
```


