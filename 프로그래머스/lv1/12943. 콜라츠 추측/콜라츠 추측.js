function solution(num) {
  let result = 0 
  while (num > 1){
   let answer = num % 2 === 0 ? false : true
   num = answer ? num * 3 + 1 : num/2
   result ++
    if(result === 500){
      result = -1
      break
    }
  }return result
}