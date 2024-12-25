class Mammal{
    constructor (name){
        this.name=name;
        this.numOfLeg=4;
        this.habitat="Land";
    }
    introduction(age){
        return `${this.name} is a mammal with ${this.numOfLeg} legs and lives on ${this.habitat} and is ${age} years old`
    }
}

const bear = new Mammal("Bear");
console.log(bear.introduction(9));

class Human extends Mammal{
    constructor (name, nationality){
        super(name);
        this.nationality=nationality;
        this.numOfLeg = 2;
    }
    speak (lang){
        return `${this.name} speaks ${lang}`;

    }
    static greeting(instance){
        return `hello ${instance.name} and she is from ${instance.nationality}`
    }
}

const wunmi = new Human ("Wunmi", "Nigeria");
console.log(wunmi.speak("English"));
console.log(wunmi.introduction(20));
console.log(Human.greeting(wunmi));
