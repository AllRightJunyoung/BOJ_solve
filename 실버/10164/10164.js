const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [n,m,k]=input[0].split(" ").map((value)=>Number(value))
let dp=new Array(n+1).fill(0)

for(let i=0;i<=n;i++){
    dp[i]=new Array(m+1).fill(0)
}

if(k===0){
  dp[1][1]=1
  for(let i=1;i<=n;i++){
    for(let j=1;j<=m;j++){
      if(i===1 && j===1) continue
      dp[i][j]=dp[i-1][j]+dp[i][j-1]
    }
  }
  console.log(dp[n][m])
}
else{
  dp[1][1]=1
  let [target_x,target_y]=[0,0]
  let count=1
  for(let i=1;i<=n;i++){
    for(let j=1;j<=m;j++){
      if(count===k){
        target_x=i
        target_y=j 
      }
      count+=1
    }
  }

  for(let i=1;i<=target_x;i++){
    for(let j=1;j<=target_y;j++){
      if(i===1 && j===1) continue
      dp[i][j]=dp[i-1][j]+dp[i][j-1]
    }
  }
  // K번까지의 경로의수를 구함

  let targetValue=dp[target_x][target_y]
  dp=new Array(n+1).fill(0)
  for(let i=0;i<=n;i++){
     dp[i]=new Array(m+1).fill(0)
  }


  // K번쨰부터 다시 
  dp[target_x][target_y]=1

  for(let i=target_x;i<=n;i++){
    for(let j=target_y;j<=m;j++){
      if(i===target_x && j===target_y) continue
      dp[i][j]=dp[i-1][j]+dp[i][j-1]
    }
  }
  //K번쨰 x 최종 목적지 
  console.log(dp[n][m]*targetValue)

}
