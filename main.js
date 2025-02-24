"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const stringUtils_1 = require("./stringUtils");
const sentence = "Module system in Node are pieces of code that have functionality such as file operation or data manipulation";
const filePath = path_1.default.join(__dirname, "reversed.txt");
fs_1.default.writeFileSync(filePath, sentence);
console.log("File path is:", filePath);
console.log("Reversed sentence is:", (0, stringUtils_1.reverseString)(sentence));
console.log("Total characters:", (0, stringUtils_1.countCharacters)(sentence));
console.log("Total character no space:", (0, stringUtils_1.noSpace)(sentence));
console.log("Sentence in uppercase:", (0, stringUtils_1.upperCaseString)(sentence));
