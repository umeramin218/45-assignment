function makeShirt(a, d) {
    if (a === "small") {
        console.log("large");
    }
    return "".concat(a).concat(d);
}
var b = makeShirt("small", 4);
console.log(b);
