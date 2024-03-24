
const fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let input = fs
  .readFileSync(__dirname + "/input.txt")
  .toString()
  .trim()
    .split("\n");


const [n,s,m]=input.shift().split(" ").map(Number)
const volume=input[0].split(" ").map(Number)


// m은 최대 볼륨
// n은 곡의 수 

let dp=new Array(n+1).fill(0)
for(let i=0;i<n;i++){
  dp[i]=new Array(1001).fill(false)
}

// dp[i][j] = i번째 곡의 j 번째 볼륨으로 재생이 되는지 안되는지

if(s+volume[0]<=m){ // 시작볼륨 + 0 번쨰 
  dp[0][s+volume[0]]=true
}
if(s-volume[0]>=0){
  dp[0][s-volume[0]]=true
}

for(let i=1;i<n;i++){
  for(let j=0;j<=m;j++){
    if(dp[i-1][j]===true){ //이전곡의 재생 가능한 볼륨일떄
        if(j+volume[i]<=m){
          dp[i][j+volume[i]]=true
        }
        if(j-volume[i]>=0){
          dp[i][j-volume[i]]=true
        }

    }
  }
}
let answer=-1
for(let i=m;i>=0;i--){
  if(dp[n-1][i]===true){
    answer=i
    break
  }
}
console.log(answer)

