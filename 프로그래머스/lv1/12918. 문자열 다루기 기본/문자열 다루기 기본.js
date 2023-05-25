function solution(s) {
    if(s.length !== 6 && s.length !==4 ){
      return false
    } else {
      const str = s.split('')
      for(let i =0; i<str.length; i++){
        if(isNaN(str[i])){
           return false
           }
      }
    }return true}
  