const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let [n,c]=input[0].split(' ').map((value)=>Number(value))
let list=input[1].split(" ").map((value)=>Number(value))

list.sort((a,b)=>a-b)
let flag=0
let map=new Map()

for(let i=0;i<list.length;i++){
   map.set(list[i],1)   
}
if(map.has(c)){
    flag=1
}

// 리스트에 있는 세개이하의조합으로 c를 만들수있는지 확인하는 문제
// 각리스트의 원소는 값이 다름 

if(!flag){
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(list[i]+list[j]===c){
                flag=1
                break
            }
            else if(list[i]+list[j]<c){
                let diff=c-(list[i]+list[j])
                if(map.has(diff) && diff!==list[i] && diff!==list[j]){
                    flag=1
                    break
                }
            }
        }
        if(flag){
            break
        }
    }
    
}
console.log(flag)