function solution(n) {
   const result = String(n).split('').sort((a,b) => a-b).reverse().join('')
    return +result
}