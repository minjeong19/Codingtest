function solution(array) {
   const num = Math.floor(array.length/2)
     const arr = [...array].sort((a,b) => a-b)
      return arr[num]
}