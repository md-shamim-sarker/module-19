/*
Write a function called make_avg() which will take an three integers and return the 
average of those values.
*/

function make_avg(int1, int2, int3) {
    let sum = int1 + int2 + int3;
    let avg = sum / 3;
    return avg;
}

console.log(make_avg(12, 15, 17).toFixed(2));