function solution(s){
    let plusP = 0
  let plusY = 0
  
  const lower = s.toLowerCase()
  for(let i=0; i<s.length; i++){
    if(lower[i] === 'p'){
plusP += 1} 
    if(lower[i] === 'y'){plusY += 1
  } 
    } return plusP === plusY ? true : false
}