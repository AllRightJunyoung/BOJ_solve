const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let n=Number(input[0])
let top=input[1].split(' ').map((value)=>Number(value))
let answer=new Array(n).fill(0)

let stack=[]

for(let i=top.length-1;i>=0;i--){
    if(!stack.length){
        stack.push([top[i],i])
    }
    else{
        // 현재 탑이 이전거보다 큰경우 레이저가 닿음 
        while(stack.length && top[i]>=stack[stack.length-1][0]){
            let[v,idx]=stack.pop()
            answer[idx]=i+1
        }
        stack.push([top[i],i])
    }
}

console.log(answer.join(" "))