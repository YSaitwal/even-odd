const evenOdd = (val) => (val % 2 ? "Odd" : "Even");

const isNumber = (val) => typeof val === "number";

const isString = (val) => typeof val === "string";

module.exports = { evenOdd, isNumber, isString };
