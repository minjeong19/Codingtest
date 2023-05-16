function solution(rny_string) {
    let answer = [];
  const str = rny_string.split('')
for(let i = 0; i < str.length; i++){
str[i] === 'm' ? answer.push('rn') : answer.push(str[i])
}
  return answer.join('')
}