const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// Sample data generation for nodes and edges
const generateDiagramData = () => {
  const nodes = [
    {
      id: 'node1',
      type: 'input',
      position: {x: 100, y: 150},
      data: {label: 'Start'},
    },
    {
      id: 'node2',
      type: 'default',
      position: {x: 400, y: 300},
      data: {label: 'Process'},
    },
    {
      id: 'node3',
      type: 'output',
      position: {x: 700, y: 450},
      data: {label: 'End'},
    },
  ]

  const edges = [
    {id: 'edge1', source: 'node1', target: 'node2', type: 'smoothstep'},
    {id: 'edge2', source: 'node2', target: 'node3', type: 'straight'},
  ]

  return {nodes, edges}
}

app.get('/diagram-data', (req, res) => {
  const data = generateDiagramData()
  res.json(data)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})

module.exports = app
