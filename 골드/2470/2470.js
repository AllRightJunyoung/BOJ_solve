const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let n= parseInt(input[0])
let list=input[1].split(' ').map((number)=>Number(number))
let diff=Infinity
let [a,b]=[0,0]
list.sort((a,b)=>a-b)

let [start,end]=[0,list.length-1]

while(start<end){

  if(diff>Math.abs(list[start]+list[end])){
    diff=Math.abs(list[start]+list[end])
    a=list[start]
    b=list[end]
  }

  if(list[start]+list[end]<0){ // 두개의 포인터 합이 음수인경우 start 옮김
    start+=1
  }
  else{
    end-=1
  }


}

console.log(a+" "+b)