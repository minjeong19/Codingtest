function solution(num_str) {
let result = 0
const str = num_str.toString()
for(let i = 0; i<str.length; i++ ){
  result += Number(str[i])
} 
  return result

}