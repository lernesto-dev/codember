const fs = require('fs')

function getTotalAttempts(){
 let attemptsList = fs.readFileSync('./log.txt', 'utf8').split('\n')
  let totalAttemptsCorrect = 0
  let totalAttemptsIncorrect = 0
  attemptsList.forEach(attempt => {
    let attemptIncorrect = false
    for (let i = 0; i < attempt.length; i++) {
      if(i > 0){
        if(attempt.charCodeAt(i) < attempt.charCodeAt(i-1)) attemptIncorrect = true
      }
    }
    if(attemptIncorrect) totalAttemptsIncorrect++
    else totalAttemptsCorrect++
  })
  return `${totalAttemptsCorrect}true${totalAttemptsIncorrect}false`;

}

console.log(getTotalAttempts());