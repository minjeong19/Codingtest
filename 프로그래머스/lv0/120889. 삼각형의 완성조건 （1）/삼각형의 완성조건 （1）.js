function solution(sides) {
   const num1 = sides.sort().reverse()[0]
  const num2 = sides.sort().reverse()[1]
  const num3 = sides.sort().reverse()[2]
  return num1 < num2+num3 ? 1 : 2
}