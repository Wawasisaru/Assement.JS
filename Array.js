//Q1- Write a function that takes in a string and returns it when reversed
// let food = “eating”
let food = "eating";
food.reverse("eating");
console.log(food);

// Q2-Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23
function binary (num, target){
    let  left = 0;
    let right = num.length -1;
    while(left <= right){
        let middle = Math.floor((left + left)/2);
        if (num [middle] === target){
            return middle;
        }
        else if (num[middle] < target){
            left = middle+1;
        }
        else{
            right = middle-1;
        }
    }
    return null
}
let num = [2,8,0,23,5,45,76];
let target = [23];
console.log(binary(num,target))
// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
let year = (2000,2023);
if(2002 < year.length-1){
    console.log("2002 is a leap year");
}
if(2003 < year.legth-1){
    console.log("2003 is not a leap year");
}
if(2004 < year.length-1){
    console.log("2004 is a leap year");
}
else{
    ("is not a leap year")

}
// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
let numbers = (0,100);
    // if()
        console.log()

// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
let numArray = [12,87,45,75,23,64,73];
    numArray.forEach(num =>{
         multiply = num*4
    console.log(multiply)
})
    
// Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function array  (num){
    let nums1 = ["10","24","45","56","67"]
    let nums2 = nums1.toString();
}
console.log(num)