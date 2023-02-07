"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Declaring types for input - the array must be an array of integers and the sum must be a integer
function pairsOfIntegers(array, sum) {
    return __awaiter(this, void 0, void 0, function* () {
        // Defining an empty array (& type - an array of arrays of integers) that will be populated with arrays of integers that, once added, are equal to the sum
        let outputArray = [];
        // ERROR HANDLING
        // Checking if the input array is an array of integers, if there is more than one integer, and if each element inside of the array is a integer. If not, return the below error message
        if (!Array.isArray(array) || array.length <= 1 || !array.every(Number.isInteger)) {
            throw new Error("Error: The first argument must be an array that consists of more than one integer.");
        }
        // Checking if the input sum is a integer. If not, return the below error message
        if (typeof sum !== "number" || !Number.isInteger(sum)) {
            throw new Error("Error: The second argument must be an integer.");
        }
        // Using a nested for loop to test all combinations of integers to see if they equal the sum when added together
        for (let i = 0; i < array.length; i++) {
            for (let j = i + 1; j < array.length; j++) {
                // If the two integers do equal the sum, they are added to the outputArray
                if (array[i] + array[j] === sum) {
                    outputArray.push([array[i], array[j]]);
                }
            }
        }
        // returning the outputArray which includes arrays of integers that equal the sum when added together
        return outputArray;
    });
}
exports.default = pairsOfIntegers;
