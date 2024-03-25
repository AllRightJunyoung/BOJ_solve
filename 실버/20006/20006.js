const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");


const [p,m]=input.shift().split(" ").map(Number)
let room=new Map()




let limit=new Array(100001).fill(0)



for(let i=0;i<input.length;i++){
   let [level,player] =input[i].split(" ")
   level=Number(level)

    if(!checkRoom(player,level,room)){ // 방에 못들어가면 방을 만든다. 
        room.set(room.size+1,[[player,level]])
        let start=level-10
        if(start<0){
            start=0
        }
        
        for(let i=start;i<=level+10;i++){
            if(limit[i].length){
                limit[i].push(room.size)
            }
            else{
                limit[i]=[room.size]
            }
        }
    }
}

    let answer=[...room]

        for(let i=0;i<answer.length;i++){
            let [_,li]=answer[i]
            li.sort((prev,cur)=>{
                if (prev > cur) return 1;
                if (prev < cur) return -1;
                if (prev === cur) return 0
            })
            if(li.length!==m){ // 방이 꽉 차있지않는다면
                console.log("Waiting!")

            }
            else{
                console.log("Started!")
            }
            
            for(let j=0;j<li.length;j++){
                const [p,l]=li[j]
                console.log(l+" "+p)
            }
        }    
    


function checkRoom(player,level,room){
  
    for(let i=0;i<limit[level].length;i++){
        let number=limit[level][i]
        if(room.get(number).length<m){
            let li=room.get(number)
            li.push([player,level])
            return true
        }
    }
    return false
  
}