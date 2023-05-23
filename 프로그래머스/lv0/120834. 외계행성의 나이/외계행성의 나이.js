function solution(age) {
   const alp = 'abcdefghij'
  return Array.from(age.toString()).map(v => alp[v]).join('')
}
