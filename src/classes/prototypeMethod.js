console.log([
    "",
    "// -----------------------------------------",
    "// prototypeMethod.js",
    "// -----------------------------------------",
].join("\n"));

class Sample {
    constructor(){
        // this function is Sample's ownProperty
        this['b'] = ()=>{
            console.log('method b');
        };

        // this function is Sample's prototype method
        this.__proto__['c'] = ()=>{
            console.log('method c');
        };
    }

    // this function is Sample's prototype method
    a(){
        console.log('method a');
    }
}

// this function is Sample's prototype method
Sample.prototype['d'] = function(){
    console.log('method d');
};

const instance = new Sample();
const isProto = str => !instance.hasOwnProperty(str);
const prefTxt = str => `method ${str} is prototype method?`;
console.log( [prefTxt("a"), isProto("a")].join(" ") );
console.log( [prefTxt("b"), isProto("b")].join(" ") );
console.log( [prefTxt("c"), isProto("c")].join(" ") );
console.log( [prefTxt("d"), isProto("d")].join(" ") );
