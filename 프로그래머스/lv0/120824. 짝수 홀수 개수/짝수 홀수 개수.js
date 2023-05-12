function solution(num_list) {
  let evenCount = 0;
  let oddCount = 0;

  num_list.forEach((el) => {
    if (el % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  });

  return [evenCount, oddCount];
}
