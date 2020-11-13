var sum = function (a, b) {
    return a + b;
};
var answer = sum(6, 8);
console.log(answer);
// boolean 
var isCool = true;
// number
var age = 76;
// string
var eyeColor = "brown";
var favoriteQuote = "I'm not old, I'm only" + age;
// Array
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon'];
// Object
var wizard = {
    a: 'John'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
;
var sizeName = Size.Small;
// Any - !!!!! BE CAREFUL
var whatever = 'aghhh no';
whatever = 5;
whatever = true;
// Void
var sign = function () {
    console.log('la la la');
};
// Never -  no return + unreacheable code
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHT');
};
fightRobotArmy({ count: 1, type: 'dragon' });
var fightRobotArmy1 = function (robots) {
    console.log('FIGHT', robots);
};
var dog = {};
dog.count;
// Function
var fightRobotArmy3 = function (robots) {
    console.log('FIGHT');
};
var fightRobotArmy4 = function (robots) {
    console.log('FIGHT', robots);
    return 2;
};
// Classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'la la la';
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello" + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RARAR');
lion.greet();
// Union
var confused = 'Hello';
