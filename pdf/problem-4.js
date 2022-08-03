/*
Write a function called odd_even() which takes an integer value and tells whether this 
value is even or odd. You need to do it in 4 ways: 
● Has return + Has parameter
● No return + Has parameter
*/

{
    function odd_even(num) {
        let result = num % 2;
        let resultVar;
        if (result === 0) {
            resultVar = `${num} is even.`;
        } else {
            resultVar = `${num} is odd.`;
        }

        return resultVar;
    }

    console.log(odd_even(55));
}

{
    function odd_even(num) {
        let result = num % 2;
        if (result === 0) {
            console.log(`${num} is even.`);
        } else {
            console.log(`${num} is odd.`);
        }
    }

    odd_even(55);
}