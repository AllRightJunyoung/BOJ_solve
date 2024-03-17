const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [n,m,k,x]=input.shift().split(" ").map((value)=>Number(value))

let graph=new Array(n+1).fill(0)
for(let i=0;i<n+1;i++){
    graph[i]=new Array()
}

for(let i=0;i<input.length;i++){
    const [start,end]=input[i].split(' ').map((value)=>Number(value))
    graph[start].push(end)    
}

let answer=bfs(x)

answer.sort((a,b)=>a-b)
if(answer.length){
    answer.forEach((node)=>console.log(node))
}
else{
    console.log(-1)
}



function bfs(start){
    let queue=[start]
    let dist=new Array(n+1).fill(-1)
    let answer=[]
    dist[start]=0

    while(queue.length){
        const current=queue.shift()
        if(dist[current]>k){
            return answer
        }
        if(dist[current]===k){
            answer.push(current)
        }        
        for(let i=0;i<graph[current].length;i++){
            const next=graph[current][i]
            if(dist[next]===-1){
                dist[next]=dist[current]+1
                queue.push(next)
            }
        }

    }

    return answer
}