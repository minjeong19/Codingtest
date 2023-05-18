function solution(array, height) {
  let result = []
    for(let i=0; i<array.length; i++){
      const arr = [...array].sort()
      if(arr[i]>height){
        result.push(arr[i])
      }
    }return result.length
}