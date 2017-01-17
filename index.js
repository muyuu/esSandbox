(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Main = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(["", "// -----------------------------------------", "// mixin.js", "// -----------------------------------------"].join("\n"));

var attachMethod = function attachMethod(methods, context) {
    Object.keys(methods).forEach(function (methodName) {
        var method = methods[methodName];
        context.__proto__[methodName] = method.bind(context);
    });
};

var swim = function swim() {
    console.log('swim');
};

var fly = function fly() {
    console.log('fly ');
};

var Fish = function Fish() {
    _classCallCheck(this, Fish);

    attachMethod({ swim: swim }, this);
};

;

var FlyFish = function (_Fish) {
    _inherits(FlyFish, _Fish);

    function FlyFish() {
        _classCallCheck(this, FlyFish);

        var _this = _possibleConstructorReturn(this, (FlyFish.__proto__ || Object.getPrototypeOf(FlyFish)).call(this));

        attachMethod({ fly: fly }, _this);
        return _this;
    }

    return FlyFish;
}(Fish);

;

var flyFish = new FlyFish();
flyFish.swim();
flyFish.fly();

},{}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(["", "// -----------------------------------------", "// prototypeMethod.js", "// -----------------------------------------"].join("\n"));

var Sample = function () {
    function Sample() {
        _classCallCheck(this, Sample);

        // this function is Sample's ownProperty
        this['b'] = function () {
            console.log('method b');
        };

        // this function is Sample's prototype method
        this.__proto__['c'] = function () {
            console.log('method c');
        };
    }

    // this function is Sample's prototype method


    _createClass(Sample, [{
        key: "a",
        value: function a() {
            console.log('method a');
        }
    }]);

    return Sample;
}();

// this function is Sample's prototype method


Sample.prototype['d'] = function () {
    console.log('method d');
};

var instance = new Sample();
var isProto = function isProto(str) {
    return !instance.hasOwnProperty(str);
};
var prefTxt = function prefTxt(str) {
    return "method " + str + " is prototype method?";
};
console.log([prefTxt("a"), isProto("a")].join(" "));
console.log([prefTxt("b"), isProto("b")].join(" "));
console.log([prefTxt("c"), isProto("c")].join(" "));
console.log([prefTxt("d"), isProto("d")].join(" "));

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(["", "// -----------------------------------------", "// staticMethod.js", "// -----------------------------------------"].join("\n"));

var StaticSample = function () {
    function StaticSample() {
        _classCallCheck(this, StaticSample);
    }

    _createClass(StaticSample, [{
        key: "a",


        // this function is Sample's method
        value: function a() {
            console.log('method a');
        }

        // this function is Sample's static method

    }], [{
        key: "b",
        value: function b() {
            console.log('method a');
        }
    }]);

    return StaticSample;
}();

var staticSample = new StaticSample();

var hasMethod = function hasMethod(obj, str) {
    var classOrFunc = obj instanceof StaticSample ? "instance" : "class";
    var has = !!obj[str] ? "has" : "has not";
    console.log(classOrFunc + " " + has + " method " + str + " is");
};
hasMethod(staticSample, "a");
hasMethod(StaticSample, "a");
hasMethod(staticSample, "b");
hasMethod(StaticSample, "b");

},{}],4:[function(require,module,exports){
"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.log(["", "// -----------------------------------------", "// subClass.js", "// -----------------------------------------"].join("\n"));

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.name = name;
    }

    _createClass(Animal, [{
        key: "speak",
        value: function speak(str) {
            console.log(this.name + (" " + str));
        }
    }]);

    return Animal;
}();

var Dog = function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog() {
        _classCallCheck(this, Dog);

        return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).apply(this, arguments));
    }

    _createClass(Dog, [{
        key: "speak",

        // override method
        value: function speak(txt) {
            console.log(this.name + (" " + txt + "."));
        }
    }]);

    return Dog;
}(Animal);

var Cat = function (_Animal2) {
    _inherits(Cat, _Animal2);

    // has type "cat"
    function Cat(name) {
        _classCallCheck(this, Cat);

        var _this2 = _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name));

        _this2.type = 'cat';
        return _this2;
    }

    return Cat;
}(Animal);

var Lion = function (_Cat) {
    _inherits(Lion, _Cat);

    function Lion() {
        _classCallCheck(this, Lion);

        return _possibleConstructorReturn(this, (Lion.__proto__ || Object.getPrototypeOf(Lion)).apply(this, arguments));
    }

    _createClass(Lion, [{
        key: "speak",


        // use parent class method
        value: function speak(txt) {
            var str = txt + " like a " + this.type;
            _get(Lion.prototype.__proto__ || Object.getPrototypeOf(Lion.prototype), "speak", this).call(this, str);
        }
    }]);

    return Lion;
}(Cat);

var dog = new Dog('jack', 'dog');
dog.speak('bow');
var lion = new Lion('sunny', 'cat');
lion.speak('gao!');

},{}],5:[function(require,module,exports){
'use strict';
console.log('let\'s get started!');
require('./classes/prototypeMethod');
require('./classes/staticMethod');
require('./classes/subClass');
require('./classes/mixin');


},{"./classes/mixin":1,"./classes/prototypeMethod":2,"./classes/staticMethod":3,"./classes/subClass":4}]},{},[5])(5)
});