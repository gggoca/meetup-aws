"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloYou = (event) => {
    const result = event.a + event.b;
    console.log(event.a, event.b, result);
    console.log('Hello you! I am lambda! Returning aum of two provided numbers. :D ');
    return result;
};
//# sourceMappingURL=with-input-lambda.js.map