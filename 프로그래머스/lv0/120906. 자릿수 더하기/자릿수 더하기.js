function solution(n) {
    let result = 0
     const str =String(n).split('') 
     for(let i =0; i<str.length; i++){
       result +=  Number(str[i])
     }
     return result
}