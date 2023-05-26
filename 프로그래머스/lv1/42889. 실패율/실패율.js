function solution(N, stages) {
  stages.sort((a, b) => a - b);
  let count = [];

  for (let i = 1; i <= N; i++) {
    let fail = stages.filter((e) => e === i).length;
    let suc = stages.filter((e) => e >= i).length;
    count.push([i, fail / suc]);
  }

  count.sort((a, b) => b[1] - a[1]); // 실패율 기준으로 내림차순 정렬

  return count.map(e=> e[0]);
}