/**
 * Created by DELL on 21.02.2017.
 */

// Object

function Animal() {

    var dublicate = this;
    var name;
    var type;
    var age;

    this.setName = function (name) {
        this.name = name;
    };

    this.setType = function (type) {
        this.type = type;
    };

    this.setAge = function (age) {
        this.age = age;
    };

    this.getName = function () {
        return this.name;
    };

    this.getType = function () {
        return this.type;
    };

    this.getAge = function () {
        return this.age;
    };

    this.clearObject = function () {
        dublicate.setName(undefined);
        dublicate.setType(undefined);
        dublicate.setAge(undefined);
    };

}

// Abstract Builder

function AnimalBuilder() {

    var animal = new Animal();

    this.getAnimal = function () {
        return animal;
    };

    this.createNewAnimal = function () {
        animal.clearObject();
    };

    this.buildName = function (name) {

    };

    this.buildType = function (type) {

    };

    this.buildAge = function (age) {

    };

}

// ConcreteBuilder Rabbit

function RabbitBuilder() {

    AnimalBuilder.call(this);

    var animal = this.getAnimal(); // имитация protected

    this.buildName = function () {
        animal.setName("Bob");
    };
    this.buildType = function () {
        animal.setType("rabbit");
    };
    this.buildAge = function () {
        animal.setAge("5");
    };
}

// ConcreteBuilder Wolf

function WolfBuilder() {

    AnimalBuilder.call(this);

    var animal = this.getAnimal(); // имитация protected

    this.buildName = function () {
        animal.setName("John");
    };
    this.buildType = function () {
        animal.setType("wolf");
    };
    this.buildAge = function () {
        animal.setAge("7");
    };

}

// Director

function Waiter() {

    var animalBuilder;

    this.setAnimalBuilder = function (builder) {
        animalBuilder = builder;
    };
    this.getAnimal = function () {
        return animalBuilder.getAnimal();
    };

    this.constructAnimal = function () {
        animalBuilder.createNewAnimal();
        animalBuilder.buildName();
        animalBuilder.buildType();
        animalBuilder.buildAge();
    };
}

//-----------------------------------------------------------------------------

var animals = [];

var waiter = new Waiter();

var rabbit = new RabbitBuilder();

waiter.setAnimalBuilder(rabbit);
waiter.constructAnimal();
animals.push(waiter.getAnimal());


var wolf = new WolfBuilder();

waiter.setAnimalBuilder(wolf);
waiter.constructAnimal();
animals.push(waiter.getAnimal());

var len = animals.length;

for(var i = 0; i < len; i++){
    console.log(animals[i].getName(), animals[i].getType(), animals[i].getAge());
}






