class MinHeap {
  constructor() {
      this.heap = [null];
  }

  insert(item){
      let current = this.heap.length;
      while (current > 1) {
          const parent = Math.floor(current / 2);
          if (this.heap[parent] > item) {
              this.heap[current] = this.heap[parent];
              current = parent;
          }else break;
      }
      this.heap[current] = item;
  }

  remove() {
      let min = this.heap[1];
      if (this.heap.length > 2) {
          this.heap[1] = this.heap[this.heap.length - 1];
          this.heap.splice(this.heap.length - 1);

          let current = 1;
          let leftChild = current * 2;
          let rightChild = current * 2 + 1;
          while (this.heap[leftChild]) {
              let CompareItem = leftChild;
              if (this.heap[rightChild] && this.heap[CompareItem] > this.heap[rightChild]) {
                  CompareItem = rightChild;
              }
              if (this.heap[current] > this.heap[CompareItem]) {
                  [this.heap[current], this.heap[CompareItem]] = [this.heap[CompareItem], this.heap[current]];
                  current = CompareItem;
              }else break;

              leftChild = current * 2;
              rightChild = current * 2 + 1;
          }
      }else if (this.heap.length === 2) {
          this.heap.splice(1, 1);
      } else {
          return null;
      }
      return min;
  }

  getMin() {
      return this.heap[1];
  }

  getHeap(){
      return this.heap;
  }

  getSize(){
      return this.heap.length - 1;
  }
}


const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs
//   .readFileSync(__dirname + "/input.txt")
//   .toString()
//   .trim()
//     .split("\n");

const n=Number(input.shift())
let list=[]
let pq=new MinHeap()

for(let i=0;i<input.length;i++){
    const [a,b,c]=input[i].split(" ").map(Number)
    list.push([b,c])
}
list.sort((a,b)=>a[0]-b[0]||a[1]-b[1])


let cnt=1
for(let i=0;i<list.length;i++){
  let [startTime,endTime]=list[i]
  // 현재 시작시간이 종료시간보다 큰경우  (우선순위큐에서뻄)
  while(pq.getSize() && pq.getMin()<=startTime){
    pq.remove()
  }
  pq.insert(endTime)
  cnt=Math.max(cnt,pq.getSize())
  
}
console.log(cnt)