const fs = require("fs")

function getnodes(){
  const nodesString = fs.readFileSync('./2024/network.txt', 'utf8')
  const nodesParsed = JSON.parse(nodesString)
  const nodesGrouped = []
  nodesParsed.forEach(node => {
    const indexs = new Set()
    nodesGrouped.forEach((group, index) => {
      if(group.has(node[0])){
        indexs.add(index)
      }
      if(group.has(node[1])){
        indexs.add(index)
      }
    })
    if(indexs.size === 0){
      nodesGrouped.push(new Set([node[0], node[1]]))
    }else {
      if(indexs.size === 1){
        nodesGrouped[indexs.values().next().value].add(node[0])
        nodesGrouped[indexs.values().next().value].add(node[1])
      }else{
        indexs.forEach(index => {
          nodesGrouped[index].add(node[0])
          nodesGrouped[index].add(node[1])
        })
      }
    }
  })
  const allNodes = nodesGrouped.filter(group => group.size === 2).map(group => {
    return Array.from(group)
  })
  return allNodes.join(',')
}


console.log(getnodes())


/**
 * 
 * 0 1 2 3 4 5
 * 1 1 1 0 0 0
 * 2 1 1 1 0 0
 * 3 0 1 1 0 0
 * 4 0 0 0 1 1
 * 5 0 0 0 1 1
 */