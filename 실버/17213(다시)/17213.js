const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [n,m]=[Number(input[0]),Number(input[1])]
let dp=new Array(n+1).fill(0)
for(let i=1;i<=n;i++){
    dp[i]=new Array(m+1).fill(0)
}


// dp[1][10]  // 과일 종류 1개를 10개 훔치는 경우의수 ====1 , dp[1][m] ===1
for(let i=1;i<=m;i++){
    dp[1][i]=1
}
// dp[2][2] // 과일 종류 2개를 2개 훔치는 경우의수 (1,2)
// dp[3][3] // 과일 종류 3개를 3개 훔치는 경우의수 (1,2,3)
for(let i=1;i<=n;i++){
    dp[i][i]=1
}

for(let i=2;i<=n;i++){
    for(let j=i+1;j<=m;j++){
        dp[i][j]=dp[i][j-1]+dp[i-1][j-1] //dp[2][3] (과일 두종류를 세개 훔치는경우) === dp[2][2]+dp[1][2] (과일 두종류 2개 + 과일 한종류 2개) 
    }
}
let answer=dp[n][m]
console.log(answer)