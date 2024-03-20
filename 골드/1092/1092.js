const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const n=Number(input[0])
let crains=input[1].split(" ").map((v)=>Number(v)).sort((a,b)=>b-a)
let m=Number(input[2])
let boxes=input[3].split(" ").map((v)=>Number(v)).sort((a,b)=>b-a)

let time=0
while(boxes.length){
    let flag=false
    for(let i=0;i<crains.length;i++){
        for(let j=0;j<boxes.length;j++){
            if(crains[i]>=boxes[j]){
                boxes[j]=Infinity
                flag=true
                break
            }
        }
    }
    boxes=boxes.filter((box)=>box!==Infinity).sort((a,b)=>b-a)
    if(!flag)break
    time+=1
}
if(boxes.length){
    time=-1
}
console.log(time)