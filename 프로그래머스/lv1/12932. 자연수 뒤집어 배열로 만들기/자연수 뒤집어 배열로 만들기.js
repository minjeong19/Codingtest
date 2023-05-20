function solution(n) {
    const str = String(n)
   const arr = (str) => Number(str)
   return str.split('').reverse().map(arr)
}