// Find the counts of elements of an unsorted integer array 
// which are equal to the average of all elements of that array.
// Ex:
// Input Case 1:  
// input: [2,2,2,2,2] 
// output:  5
// solution : 2 + 2 + 2 + 2 + 2 = 10/5 ==> 2
// it contain five 2 element

// Input Case 2:  
// input: [ 1,3,2,4,5]  
// output:  1
// solution : 1 + 3 + 2 + 4 + 5 = 15/5 ==> 3
// it contain one 3 element

// Case 1 :
const numbersChar = ['zero', 'one', 'two', 'three', 'four', 'five'] ;
const arr =  [2,2,2,2,2] ;
let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
const avg = (sum / arr.length) 

let count = 0;
for(let i = 0; i < arr.length; i++){
    if(avg == arr[i]){
       count++;
    }
}
console.log(`It contains ${numbersChar[count]}, ${avg} element`);

// Case 2 :
const arr2 = [1,3,2,4,5];
let sum2 = 0;
for(let i = 0; i < arr2.length; i++){
    sum2 += arr2[i]
}
const avg2 = (sum2 / arr2.length);

let count2 = 0;
for(let i = 0; i < arr2.length; i++){
    if(avg2 == arr2[i]){
        count2++;
    }
    
}
console.log(`it contain ${numbersChar[count2]}, ${avg2} element`);


//Q2) :-
const emailsArr = [
    "ghi@hotmail.com",
    "def@yahoo.com",
    "ghi@gmail.com",
    "abc@channelier.com",
    "abc@hotmail.com",
    "def@hotmail.com",
    "abc@gmail.com",
    "abc@yahoo.com",
    "def@channelier.com",
    "jkl@hotmail.com",
    "ghi@yahoo.com",
    "def@gmail.com",
  ];
  
  function sendMail(Emails) {
    const sortEmails = Emails.sort();
  
    let firstAlphabetEmail = sortEmails[0];
    let index = firstAlphabetEmail.indexOf("@");
    let startingAlphabet = firstAlphabetEmail.slice(0, index);
  
    for (let i = 0; i < sortEmails.length; i++) {
      if (sortEmails[i].includes(startingAlphabet)) {
        console.log(sortEmails[i]);
      }
    }
  }
  
  sendMail(emailsArr);
  

// 3. Find the average of largest and smallest numbers in an unsorted integer array?
// Eg. 
// Input Case 1:  
// input: [1, 4, 3, 2]
// output:  2.5
// solution : average = (1+4)/2 =>5/2 => 2.5

// input: [1, 4, 3, 4]
// output:  3
// solution : average = (1 + 4 + 4)/3 =>9/3 => 3

// Case 1 :
const numbers = [1, 4, 3, 2];
let smallestNum = numbers[0];
let largestNum = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < smallestNum){
        smallestNum = numbers[i]
    }
    if(numbers[i] > largestNum){
        largestNum = numbers[i]
    }
    
};
const addAll = (smallestNum + largestNum) 
const average = addAll /2
console.log(average);

// Case 2:
const numbers2 = [1, 4, 3, 4];
let smallNum = numbers2[0];
let largNum = numbers2[0];

let smallAndRptdLargeNumber = [];


for(let i = 0; i < numbers2.length; i++){
    if(numbers2[i] < smallNum){
        smallNum = numbers2[i];
    }
    if (numbers2[i] > largNum){
        largNum = numbers2[i];
     }
}
for(let i = 0; i < numbers2.length; i++){
    if(numbers2[i] == largNum){
    smallAndRptdLargeNumber.push(numbers2[i])
    }
}
  
smallAndRptdLargeNumber.push(smallNum)

let sumAll = 0
smallAndRptdLargeNumber.forEach((el, i)=>{
  sumAll += el
})
const newAvg = sumAll/smallAndRptdLargeNumber.length
console.log(newAvg);

