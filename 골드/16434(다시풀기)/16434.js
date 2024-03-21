const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
    .split("\n");


const [n,h]=input[0].split(" ").map((v)=>Number(v))
let list=[]

for(let i=1;i<input.length;i++){
    let [a,b,c]=input[i].split(" ").map((v)=>Number(v))
    list.push([a,b,c])
}

let [l,r]=[1,999999000001*n]
let answer;




while(l<r){
    let mid=(l+r)/2
    mid=Math.ceil(mid)
    if(isValid(h,mid,list)){
        answer=mid
        r=mid-1
    }
    else{
        l=mid+1
    }
}

console.log(answer)


function isValid(attack,maxHp,list){
    
    let userHp=maxHp
    let userAttack=attack
    for(let i=0;i<list.length;i++){
        const [t,monsterAttack,monsterHp]=list[i]
        if(t===1){
            let d=Math.ceil(monsterHp/userAttack)
            userHp=userHp-(d*monsterAttack)
            if(userHp<=0){
                return false
            }
        }
        else{
            userAttack+=monsterAttack
            userHp=Math.min(maxHp,monsterHp+userHp)
        }
    }
  
    return true

}