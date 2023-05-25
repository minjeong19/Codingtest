function solution(arr, divisor) {
 const array = []
 for( let i =0; i<arr.length; i++){
   if(arr[i]%divisor === 0){
     array.push(arr[i])
   } }
 
 return array.length === 0 ? [-1] : array.sort((a,b) => a-b)
}