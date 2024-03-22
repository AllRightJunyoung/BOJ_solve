const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
    .split("\n");

let t=Number(input[0])

while(t){
    const [n,k]=input.shift().split(" ").map((value)=>Number(value))
    const cost=input.shift().split(" ").map((value)=>Number(value))
    let indegree=new Array(10000).fill(0)
    let graph=new Array(10000).fill(0)

    for(let i=0;i<graph.length;i++){
      graph[i]=new Array()
    }
    for(let i=0;i<k;i++){
      const [a,b]=input.shift().split(" ").map((value)=>Number(value))
      graph[a].push(b)
      indegree[b]+=1
    }
    const w=Number(input.shift())
    let queue=[]
    for(let i=1;i<=n;i++){
      if(indegree[i]===0){
        queue.push(i)     
      }
    }
    
    let totalCost=[...cost]

    while(queue.length){
      const cur=queue.shift()
    
      for(let i=0;i<graph[cur].length;i++){
        let next=graph[cur][i]

        if(totalCost[next-1]<totalCost[cur-1]+cost[next-1]){
          totalCost[next-1]=totalCost[cur-1]+cost[next-1]
        }

        indegree[next]-=1
        if(indegree[next]===0){
          queue.push(next)
        }
      }
     }
     console.log(totalCost[w-1])

    t-=1
}