const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const str=input[0]
let list=[]

for(let i=0;i<str.length;i++){
    for(let j=i+1;j<str.length;j++){
        for(let z=j+1;z<str.length;z++){
            let a=str.substring(0,i+1)
            let b=str.substring(i+1,j+1)
            let c=str.substring(j+1,str.length)
            a=reverseString(a)
            b=reverseString(b)
            c=reverseString(c)
            let s=a+b+c
            list.push(s)
        }
    }
}
list.sort()
let answer=list[0]
console.log(answer)

function reverseString(s){
    return [...s].reverse().join("")
}