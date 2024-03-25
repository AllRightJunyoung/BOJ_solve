const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");
let [n,k,b]=input.shift().split(" ")
n=Number(n)
k=Number(k)
b=Number(b)

let list=new Array(n+1).fill(0)
input=input.map((Number))
for(let i=0;i<input.length;i++){
    let number=input[i]
    list[number]+=1   
}
let [start,end]=[1,1]

let cnt=0
let answer=Infinity
while(start<=n && end <= n){
    if(list[end]!==0){
        cnt+=list[end]
    }
    if((end-start+1)===k){
        answer=Math.min(answer,cnt)
        if(list[start]!==0){
            cnt-=list[start]
        }
        start+=1
    }
    end+=1
}

console.log(answer)