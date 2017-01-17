console.log([
    "",
    "// -----------------------------------------",
    "// subClass.js",
    "// -----------------------------------------",
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

    // has type "cat"
    constructor(name){
        super(name);
        this.type = 'cat';
    }
}

class Lion extends Cat {

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
