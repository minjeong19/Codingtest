function solution(array) {
   const num = Math.max(...array)
   return [num, array.indexOf(num)]
}