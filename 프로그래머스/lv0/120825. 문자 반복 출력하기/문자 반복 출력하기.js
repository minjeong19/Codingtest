function solution(my_string, n) {
     const str = [...my_string].map((e) => e.repeat(n))
 return str.join('')
}