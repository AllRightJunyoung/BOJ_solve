const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let answer=-1
let list;
let [n,taesu,p]=input[0].split(" ").map((number)=>Number(number))
if(n===0){
    console.log(1)
    return 
}
else{
    list=input[1].split(" ").map((value)=>Number(value))
}
list.sort((a,b)=>b-a)
let scores=new Map()
let rank=1


for(let i=0;i<list.length;i++){
   if(!scores.has(list[i])){
    scores.set(list[i],{
        rank,
        count:[list[0]]
    })
   }
   else{
    const tmp=scores.get(list[i])
    if(list[i]===list[i-1]){ //이전과 같은값이면 
        tmp.count.push(list[i])
        scores.set(list[i],tmp)
    }
    else{
        tmp.rank=rank
        tmp.count.push(list[i])
        scores.set(list[i],tmp)
    }
    }
   rank+=1
}

for(let i=0;i<p;i++){
    let score=scores.get(list[i])
    if(!score){
        answer=rank
        break
    }
    if(taesu>list[i]){
        answer=score.rank
        break
    }
    else if(taesu===list[i]){
        if(score.count.length+score.rank>p){ // 랭킹리스트가 꽉차있을때 
            continue
        }
        else{
            answer=score.rank
            break
        }
    }
 
}
console.log(answer)