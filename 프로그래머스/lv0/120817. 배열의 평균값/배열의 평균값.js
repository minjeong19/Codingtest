function solution(numbers) {
  let avg = 0
  let sum = 0 
    for(let i = 0; i<numbers.length; i++){
      sum += numbers[i]
    }
  avg = sum/numbers.length
  return avg
}