function solution(num) {
  let answer = [];
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
}

// function solution(num){
//     let answer =[]
//     for (let i=1; i<=num; i+=2){
//         answer.push(i)
//     }
// }