function solution(x) {
        return x % Array.from(x.toString()).reduce((a,c) => a +Number(c),0) === 0 ? true : false
}