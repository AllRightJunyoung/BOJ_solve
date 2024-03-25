const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let n=Number(input.shift())
let list=input.shift().split(" ").map(Number)
let [start,end]=[0,0]
let answer=0
let visited=new Array(100001).fill(false)
while(start<n && end<n){
    let num=list[end]
    if(!visited[num]){ // 중복이 안나오는경우
      visited[num]=true
      end+=1
      answer+=(end-start)
    }
    else{
      visited[list[start]]=false
      start+=1
    }


}
console.log(answer)