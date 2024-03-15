const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let [n,k]=input[0].split(" ").map((number)=>Number(number))
const s=input[1].split(" ").map((value)=>Number(value))
const d=input[2].split(" ").map((value)=>Number(value))
let p=new Array(n).fill(0)

while(k!==0){
    for(let i=0;i<d.length;i++){
        let idx=d[i]-1
        p[idx]=s[i]
    }
    for(let i=0;i<p.length;i++){
        s[i]=p[i]
    }

    k-=1
}
console.log(p.join(" "))
