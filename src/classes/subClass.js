console.log([
    "=========================================",
    "= subClass.js",
    "=========================================",
].join("\n"));

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak(str) {
        console.log(this.name + ` ${str}`);
    }
}

class Dog extends Animal {
    // override method
    speak(txt) {
        console.log(this.name + ` ${txt}.`);
    }
}

class Cat extends Animal {
    speak(txt) {
        super.speak(txt);
    }
}

class Lion extends Cat {
    constructor(name, type){
        super(name);
        this.type = type;
    }

    // use parent class method
    speak(txt) {
        let str = `${txt} like a ${this.type}`;
        super.speak(str);
    }
}

const dog = new Dog('jack', 'dog');
dog.speak('bow');
const lion = new Lion('sunny', 'cat');
lion.speak('gao!');
