console.log([
    "",
    "// -----------------------------------------",
    "// mixin.js",
    "// -----------------------------------------",
].join("\n"));


const attachMethod = (methods, context)=>{
    Object.keys(methods).forEach((methodName) =>{
        const method = methods[methodName];
        context.__proto__[methodName] = method.bind(context);
    });
};

const swim = function(){
    console.log('swim');
};

const fly = function(){
    console.log('fly ');
};


class Fish {
    constructor(){
        attachMethod({swim}, this);
    }
};

class FlyFish extends Fish {
    constructor(){
        super();
        attachMethod({fly}, this);
    }
};

const flyFish = new FlyFish();
flyFish.swim();
flyFish.fly();
