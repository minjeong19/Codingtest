function solution(my_string) {
  const number = [0,1,2,3,4,5,6,7,8,9]
  const arr = Array.from(my_string)
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (number.includes(Number(arr[i]))) {
      result.push(arr[i]);
    }
  }
 return result.map(Number).sort((a,b) => a-b);
}