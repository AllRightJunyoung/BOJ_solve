const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const t=parseInt(input.shift())
let answer=[]
for(let i=0;i<input.length;i++){
       answer.push(nextPermutation(input[i]))
}

answer.forEach((value)=>console.log(value))



function nextPermutation(s) {
    // 문자열을 배열로 변환
    let arr = Array.from(s);
    
    // 뒤에서부터 탐색하여 첫 번째로 감소하는 위치를 찾음
    let i = arr.length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) {
        i--;
    }

    if (i === -1) {
        // 마지막 순열인 경우, 처음 순열로 반환
        return s
    }

    // 뒤에서부터 탐색하여 arr[i]를 초과하는 첫 번째 위치를 찾음
    let j = arr.length - 1;
    while (arr[j] <= arr[i]) {
        j--;
    }

    // arr[i]와 arr[j]를 교환
    [arr[i], arr[j]] = [arr[j], arr[i]];

    // arr[i+1:]을 뒤집어 오름차순 정렬 효과를 줌
    let right = arr.splice(i + 1).reverse();
    arr = arr.concat(right);
    
    return arr.join('');
}


