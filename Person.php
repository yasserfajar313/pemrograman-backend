<?php

class Person {
    var $name;
    var $age;

    function greeting($name) {
        echo "Hallo $name , my name $this->name, I am $this->age years old";
    }
}

$ahmad = new Person();
$ahmad ->name = "Yasser Fajar Purwawiwaha";
$ahmad ->age = 21;
$ahmad ->greeting("Yasser");