
const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const p=input[0].split('')
let visited=new Array(p.length).fill(0)
let store=[]
let tmp=[]
let answer=new Set()
for(let i=0;i<p.length;i++){
    if(p[i]==='('){
        tmp.push(i)
    }
    else if(p[i]===')'){
        const start=tmp.pop()
        store.push([start,i])
    }
}

dfs(0,0)
answer=[...answer].sort()
for(let i=0;i<answer.length;i++){
    console.log(answer[i])
}



function dfs(depth,idx){
    if(depth>=1){
        let str=""
        for(let i=0;i<p.length;i++){
            if(!visited[i]){
                str+=p[i]
            }
        }
        answer.add(str)
    }

    for(let i=idx;i<store.length;i++){
        const[open,close]=store[i]
        visited[open]=true
        visited[close]=true
        dfs(depth+1,i+1)
        visited[open]=false
        visited[close]=false
    }
    
}