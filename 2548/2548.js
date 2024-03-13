const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let n=Number(input[0])
let array=input[1].split(' ').map((value)=>Number(value))

// 정렬후 중앙값
let answer;
array.sort((a,b)=>a-b)
if(n%2===0){
  answer=array[n/2-1]
}
else{
  answer=array[Math.floor(n/2)]
}
console.log(answer)