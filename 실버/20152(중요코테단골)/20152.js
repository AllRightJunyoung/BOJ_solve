const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [h,n]=input.shift().split(" ").map(Number)
let diff=Math.abs(n-h)


let dp=new Array(diff+1).fill(0)
for(let i=0;i<diff+1;i++){
    dp[i]=new Array(diff+1).fill(0)
}
// 첫행 
for(let i=0;i<=diff;i++){
    dp[0][i]=1
} 


// j>i 침수
for(let i=1;i<=diff;i++){
    for(let j=i;j<=diff;j++){
        dp[i][j]=dp[i-1][j]+dp[i][j-1]
    }
}

console.log(dp[diff][diff])