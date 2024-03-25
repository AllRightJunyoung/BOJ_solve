const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");


input=input[0].split("")
let stack=[]


for(let i=0;i<input.length;i++){
    if(input[i]==='('){
        stack.push('(')
    }
    else if(input[i]===')'){
        let total=0
        while(stack.length){
            let top=stack.pop()
            if(top==='(') break
            total+=top
        }
        stack.push(total)
    }
    else{
        if(!isNaN(input[i])){
            let top=stack.pop()
            stack.push(Number(input[i])*top)
        }
        else{
            if(input[i]==='C'){
                stack.push(12)
            }
            else if(input[i]==='O'){
                stack.push(16)
            }
            else{
                stack.push(1)
            }
        }
    }
}

let answer=0
while(stack.length){
    let top=stack.pop()
    answer+=top
}
console.log(answer)