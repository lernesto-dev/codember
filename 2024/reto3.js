const fs = require('fs')

function totalSteps(){
  let totalSteps = 0
  let totalStepsLine = 0
  let position = 0
  let instructions = []
  let lastInstruction = 0
  let lines = fs.readFileSync('./trace.txt', 'utf8').split('\r\n')
  for(line of lines){
    totalStepsLine = 0
    position = 0
    lastInstruction = 0
    instructions = line.split(' ').map(instruction => Number(instruction))
    while(position > -1 && position < instructions.length){
      lastInstruction = instructions[position]
      instructions[position] +=1
      position += lastInstruction
      totalStepsLine++
    }
    totalSteps += totalStepsLine
  }
  return `${totalSteps}-${totalStepsLine}`
}

console.log(totalSteps())