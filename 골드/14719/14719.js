const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");


const [h,w]=input[0].split(" ").map((value)=>Number(value))
let list=input[1].split(" ").map((value)=>Number(value))


let answer=0

// 1. 현재 위치로부터 왼쪽에있는값들중에 가장 높은값 , 오른쪽에있는값들중에 가장 높은값을구함

// 1에서 구한 둘중 작은값 - 현재위치 === 빗물이 고이는 높이

for(let i=1;i<list.length;i++){
    let [leftMaxValue,rightMaxValue]=[0,0]
    let minValue=Infinity
    for(let j=i;j>=0;j--){
        if(list[j]>leftMaxValue){
            leftMaxValue=list[j]
        }
    }
    for(let z=i;z<list.length;z++){
        if(list[z]>rightMaxValue){
            rightMaxValue=list[z]
        }
    }
    minValue=Math.min(rightMaxValue,leftMaxValue)
    answer+=minValue-list[i]
}
console.log(answer)