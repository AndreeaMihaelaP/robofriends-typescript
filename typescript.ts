const sum = (a : number, b : number) =>{
    return a + b;
}

const answer = sum(6, 8);
console.log(answer);

// boolean 
let isCool: boolean = true;

// number
let age: number = 76;

// string
let eyeColor: string = "brown";
let favoriteQuote: string= `I'm not old, I'm only${age}`;

// Array
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon'];

// Object
let wizard: object = {
    a: 'John'
}

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
let basket: [string, number];
basket = ['basketball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3};
let sizeName: number = Size.Small

// Any - !!!!! BE CAREFUL
let whatever: any = 'aghhh no';
whatever = 5;
whatever = true;

// Void
let sign = (): void => {
    console.log('la la la');
}

// Never -  no return + unreacheable code
let error = (): never => {
 throw Error('oops');
}

// Interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string // ? - is optional
}

// The same but don't create a new name
type RobotArmy1 = {
    count: number,
    type: string,
    magic: string,
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log('FIGHT');
}

fightRobotArmy({count: 1, type: 'dragon'})

let fightRobotArmy1 = (
robots: {  
    count: number,
    type: string,
    magic: string
}) => {
    console.log('FIGHT', robots);
}

// Type Assertions
interface CatArmy {
    count: number,
    type: string,
    magic: string,
}

let dog = {} as CatArmy
dog.count

// Function
let fightRobotArmy3 = (robots: RobotArmy):void => {
    console.log('FIGHT');
}

let fightRobotArmy4 = (
    robots: {  
        count: number,
        type: string,
        magic: string
    }): number => {
        console.log('FIGHT', robots);
        return 2;
}

// Classes
class Animal {
    private sing: string = 'la la la';
    constructor(sound: string) {
        this.sing = sound;
    }
    greet(): string {
        return `Hello${this.sing}`
    }
}

let lion = new Animal('RARAR');
lion.greet();

// Union
let confused: string | number = 'Hello';
