console.log([
    "",
    "// -----------------------------------------",
    "// staticMethod.js",
    "// -----------------------------------------",
].join("\n"));
class StaticSample {

    // this function is Sample's method
    a(){
        console.log('method a');
    }

    // this function is Sample's static method
    static b(){
        console.log('method a');
    }
}

const staticSample = new StaticSample();

const hasMethod = (obj, str) => {
    let classOrFunc = obj instanceof StaticSample ? "instance" : "class";
    let has = !!obj[str] ? "has" : "has not";
    console.log(`${classOrFunc} ${has} method ${str} is`);
}
hasMethod(staticSample, "a");
hasMethod(StaticSample, "a");
hasMethod(staticSample, "b");
hasMethod(StaticSample, "b");
