"use strict";
//1. Convert the following JavaScript array into a TypeScript tuple
const userInfo = [101, "Ema", "John", true, , "2023"];
const newUser = [
    101,
    "Ema",
    "John",
    true,
    ,
    "2023",
];
const findCommonNumbers = (param1, param2) => {
    return param1.filter((numbers) => {
        return param2.includes(numbers);
    });
};
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const array1 = [85, 65, 52, 45, 32];
const array2 = [85, 52, 36, 12, 22, 32];
// use filter() method
// on arr1
const commonElements = findCommonNumbers(array1, array2);
console.log(commonElements);
// type arrayOfNumbers = number[];
//3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
/* Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety. */
// interface IProduct {
//   id: string;
//   name: string;
//   price: number;
//   category: string;
// }
// function filterProduct<T>();
//4.Suppose you have an array of tuples, where each tuple represents a product and contains the product name, price, and quantity. Write a TypeScript function that calculates the total cost of all the products in the array, using a generic type for the tuple and a type alias for the array.
//5.Suppose you have an array of numbers in TypeScript, and you want to find the sum of all the even numbers in the array. How would you approach this problem and write code to solve it?
//6.Create an interface called Person that includes properties for name (string), age (number), and email (string). Then create an array of Person objects and write a function that takes the array and a string email as parameters, and returns the Person object that matches the email or null if no match is found.
//7.Create a TypeScript program that declares an array of numbers. Use the spread  operator to pass the elements of the array as arguments to a function that finds the minimum and maximum values of the array. Use destructuring to assign the minimum and maximum values to separate variables, and log them to the console.
//8.Create a TypeScript program that declares a function that takes a string parameter with a literal type of "red", "green", or "blue", and an optional boolean parameter. If the boolean parameter is true, log the string parameter in uppercase. If the boolean parameter is false or not provided, log the string parameter in lowercase.
