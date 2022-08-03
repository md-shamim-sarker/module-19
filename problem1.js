/*
১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
*/
function myFunction(y) {

    for (let i = 1; i <= 10; i++) {
        let multiplication = y * i;
        console.log(y, ' x ', i, ' = ', multiplication);
    }
}

myFunction(469);