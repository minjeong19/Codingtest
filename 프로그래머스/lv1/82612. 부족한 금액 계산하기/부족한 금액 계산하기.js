function solution(price, money, count) {
    var answer = 0;
    for(let i=0; i<=count; i++){
      answer += price * i
}
    return answer > money ? answer - money : 0
}