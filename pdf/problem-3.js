/*
Challenging: Write a function called make_avg() which will take an array of integers and 
the size of that array and return the average of those values.
*/

const myArray = [10, 20, 30, 50, 60, 70, 50, 40, 60];
let sum = 0;

function make_avg(arr) {
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
    }
    let avg = sum / arr.length;
    return avg;
}

console.log(make_avg(myArray).toFixed(2));