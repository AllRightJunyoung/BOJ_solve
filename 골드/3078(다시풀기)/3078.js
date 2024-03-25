const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [n,k]=input.shift().split(' ').map(Number)
let counter=new Array(21).fill(0)
let list=new Array(n+1).fill(0)

for(let i=0;i<input.length;i++){
    list[i]=input[i].length
}

//window size만큼 개수 카운팅
for(let i=0;i<=k;i++){
    counter[list[i]]+=1
}
let answer=0
for(let i=0;i<n;i++){
    counter[list[i]]-=1 //자기자신 빼기
    answer+=counter[list[i]] //
    counter[list[i+k+1]]+=1 //윈도우 한칸증가
}
console.log(answer)

