function solution(left, right) {
   let sum = 0
for (let i = left; i<right+1; i++){
  let divides =[]
  for(let j =0; j<i+1; j++){
    if(i % j === 0) divides.push(j)
} sum += divides.length %2 === 0 ? i : -i
  } return sum
}