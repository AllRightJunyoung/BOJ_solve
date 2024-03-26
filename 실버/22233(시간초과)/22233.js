const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const [n,m]=input.shift().split(" ").map(Number)

let map=new Map()

for(let i=0;i<n;i++){
    const word=input.shift()
    map.set(word,1)
}

for(let i=0;i<input.length;i++){
    const words=input[i].split(",")
        for(let i=0;i<words.length;i++){
            const word=words[i]
            if(map.has(word)){
                map.delete(word)
            }
        }
        console.log(map.size)
}