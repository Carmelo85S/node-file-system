"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noSpace = exports.upperCaseString = exports.countCharacters = exports.reverseString = void 0;
const reverseString = (str) => {
    return str.split("").reverse().join("");
};
exports.reverseString = reverseString;
const countCharacters = (str) => {
    return str.length;
};
exports.countCharacters = countCharacters;
const upperCaseString = (str) => {
    return str.toUpperCase();
};
exports.upperCaseString = upperCaseString;
const noSpace = (str) => {
    return str.replace(/ /g, "").length;
};
exports.noSpace = noSpace;
