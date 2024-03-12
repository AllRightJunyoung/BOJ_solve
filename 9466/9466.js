const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

let n=Number(input[0])
input.shift()
let graph,array,student,finished,visited,grouped,cnt;


while(n!==0){
    
    student=Number(input.shift())
    array=input.shift().split(' ').map((value)=>Number(value))
    graph=new Array(student+1).fill(0)
    finished=new Array(student+1).fill(false)
    visited=new Array(student+1).fill(0)

    for(let i=1;i<=student;i++){
      graph[i]=new Array()
    }

    for(let i=0;i<array.length;i++){
      graph[i+1].push(array[i])
    }
    cnt=0
    grouped=0
    for(let i=1;i<=student;i++){
      if(!finished[i]){
        dfs(i)
      }
    }
    console.log(student-grouped)
    n-=1

}

function dfs(current){

  visited[current]=++cnt

  for(let i=0;i<graph[current].length;i++){
    let next=graph[current][i]
    if(!visited[next]){
      dfs(next)
    }
    else if(!finished[next]){
      grouped+=visited[current]-visited[next]+1
    }
  }
  
  finished[current]=true
}