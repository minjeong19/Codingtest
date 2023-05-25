function solution(arr) {
    const min = Math.min(...arr)
    const filter = arr.filter((v,i,a) => {
      return v !==min
    })
    return filter.length !== 0 ? filter : [-1]
}