/*
২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
*/

function myFunction(name) {
    return name.toLowerCase();
}

let result = myFunction('ShAmIM');
console.log(result);