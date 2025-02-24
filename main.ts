import path from "path";
import fs from "fs";
import { reverseString, countCharacters, upperCaseString, noSpace } from "./stringUtils";

const sentence: string = "Module system in Node are pieces of code that have functionality such as file operation or data manipulation";

const filePath: string = path.join(__dirname, "reversed.txt");

fs.writeFileSync(filePath, sentence);

console.log("File path is:", filePath);
console.log("Reversed sentence is:", reverseString(sentence));
console.log("Total characters:", countCharacters(sentence));
console.log("Total character no space:", noSpace(sentence));
console.log("Sentence in uppercase:", upperCaseString(sentence));

