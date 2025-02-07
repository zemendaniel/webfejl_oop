const sum = (a, b) => {
    return a + b;
};

console.log(sum(4,5));

const obj = {};
obj.calculate1 = sum;
console.log(obj.calculate1(1,2));

obj.calculate2 = (cb) => {
    return cb(1, 2);
}

console.log(obj.calculate2((a, b) => a + b));
console.log(obj.calculate2((a, b) => a * b));

obj.calculate3 = (a, b, cb) => {
    return cb(a, b);
}
console.log(obj.calculate3(4, 5, (a, b) => a + b));

const theFunction = () => {
    const szam = 10;
    console.log(obj.calculate3(2, 7, (a, b) => a * szam + b));
}

theFunction();
