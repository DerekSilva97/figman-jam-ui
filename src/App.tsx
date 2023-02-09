import ReactFlow, { addEdge, Background, Connection, ConnectionMode, Controls, useEdgesState, useNodesState } from 'reactflow';
import * as Toolbar from '@radix-ui/react-toolbar'
import {zinc,emerald} from 'tailwindcss/colors';
import 'reactflow/dist/style.css';
import { Square } from './components/nodes/Square';
import { useCallback, useState } from 'react';
import DefaultEdge from './components/edges/DefaultEdge';
import { Circle } from './components/nodes/Circle';


const NODE_TYPES = {
  square: Square,
  circle: Circle,
}

const EDGE_TYPES ={
  default: DefaultEdge
}

const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },{
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400,
    },
    data: {},
  },
] satisfies Node[]

function App() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES)

  const [nodeName, setNodeName] = useState('Node 1');


  const onConnect = useCallback(( connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  },[]);

  function addSquareNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 750,
          y: 350,
        },
        style: {
          color: 'snow'
        },
      data: {label: 'Node 1'},
      }
    
  ])
}
    function addCircleNode(){
      setNodes(nodes => [
        ...nodes,
          {
            id: crypto.randomUUID(),
            type: 'circle',
            position: {
              x: 750,
              y: 350,
            },
          data: {
          },
          }       
      ])
    }

  return (
   <div className='w-screen h-screen'>
      <h1 className='fixed top-10 left-1/2 -translate-x-1/2 px-8 text-2xl overflow-hidden text-emerald-900'>
        CRIE SEU FLOWCHART
      </h1>
     <ReactFlow 
      nodeTypes={NODE_TYPES}
      edgeTypes={EDGE_TYPES}
      nodes={nodes}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodesChange={onNodesChange}
      connectionMode={ConnectionMode.Loose}
      defaultEdgeOptions={{
        type: 'default'
      }}
     >
        <Background
          gap={12}
          size={2}
          color={emerald[400]}
        />
        <Controls/>
      </ReactFlow>

      <Toolbar.Root className='fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-emerald-300 px-8 h-20 w-96 overflow-hidden'>
        <h1>Adicionar nota</h1>
        <Toolbar.Button 
          onClick={addSquareNode}
          className='w-32 h-32 bg-violet-500 mt-2 rounded transition-transform hover:-translate-y-2'
        />
        <Toolbar.Button
          onClick={addCircleNode}
          className='w-32 h-32 bg-blue-500 mt-2 ml-8 rounded-full transition-transform hover:-translate-y-2'
        />
      </Toolbar.Root>
      
   </div>
  );
}

export default App
