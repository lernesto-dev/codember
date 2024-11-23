function getCombination(initialCombination, steps){
  let positionCurrent = 0
  const numbers = initialCombination.split('').map(digit =>Number(digit))
  steps.split('').forEach(step=>{
     if(step === 'R'){
        positionCurrent = (positionCurrent + 1) % numbers.length
     }
     if(step === 'L'){
        positionCurrent = positionCurrent - 1 === -1 ? numbers.length - 1 : positionCurrent - 1
     }
     if(step === 'U'){
        numbers[positionCurrent] =  (numbers[positionCurrent] + 1) % 10
     }  
     if(step === 'D'){
        numbers[positionCurrent] = numbers[positionCurrent] - 1 === -1 ? 9 : numbers[positionCurrent] - 1
     }
  })
  return numbers.join('')
}

console.log(getCombination('528934712834', 'URDURUDRUDLLLLUUDDUDUDUDLLRRRR'))