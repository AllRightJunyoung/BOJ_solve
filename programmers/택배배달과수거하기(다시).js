function solution(cap, n, deliveries, pickups) {
 

    // 최대 cap개 배달가능 , n개의 집

    let answer=0

    deliveries.reverse()
    pickups.reverse()
    let d=0
    let p=0
    for(let i=0;i<deliveries.length;i++){
       

        d-=deliveries[i]
        p-=pickups[i]
        let cnt=0

        while(d<0 || p<0){ // 왕복고려
            d+=cap
            p+=cap
            cnt+=1
        }

        answer+=(n-i)*2*cnt
        
       
       
    }

    return answer;
}

solution(4,5,[1,0,3,1,2],[0,3,0,4,0])