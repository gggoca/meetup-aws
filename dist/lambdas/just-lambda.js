"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
exports.HelloYou = () => {
    let a = getRandomInt(50);
    let b = getRandomInt(50);
    let result = a + b;
    console.log(a, b, result);
    console.log('Hello you! I am lambda! Returning sum of two random numbers. :D ');
    return result;
};
//# sourceMappingURL=just-lambda.js.map