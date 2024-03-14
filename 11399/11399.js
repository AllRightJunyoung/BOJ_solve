const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");
const n=Number(input[0])
const list=input[1].split(" ").map((value)=>Number(value))
let order=[]

for(let i=0;i<list.length;i++){
    order.push([i+1,list[i]])
}

let answer=0
let sum=0

// 가장 빨리 걸리는 시간부터 처리하면됨 
order.sort((a,b)=>a[1]-b[1])
for(let i=0;i<order.length;i++){
  const [_,time]=order[i]
  sum+=time
  answer+=sum

}
console.log(answer)