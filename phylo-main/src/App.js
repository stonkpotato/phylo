import { useCallback, useState } from 'react';
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from 'react-flow-renderer';
import useWindowDimensions from "./dims.js";
import click from "./click_node.js";
import { BarChart, XAxis } from 'recharts';

const nodeTypes = {
  click: click
};

const onClick = () => {
  console.log("clicked")
}

const Flow = () => { 

  const {height, width} = useWindowDimensions();
  const flowStyles = { top: 1/8 * height, height: 1/2 * height, width: width };

  const nodes1 = [
    { id: '1g', position: { x: 1/10 * width, y: 1/8 * height}, targetPosition: "left", sourcePosition: "right", style: { backgroundColor: 'rgba(0, 255, 0, 0.2)', width: 104, height: 76 }},
    { id: '1', data: { onClick: onClick, img: "hyrachotherium.jpeg" }, type: 'click', position: { x: 1/10 * width, y: 1/8 * height}, targetPosition: "left", sourcePosition: "right", parent: '1g'},
    { id: '23g', position: { x: 3/10 * width, y: 1/8 * height}, targetPosition: "left", sourcePosition: "right", style: { backgroundColor: 'rgba(255, 0, 255, 0.2)', width: 1/5 * width + 104, height: 76 }},
    { id: '2', data: { onClick: onClick, img: "mesohippus.jpeg" }, type: 'click', position: { x: 3/10 * width, y: 1/8 * height }, targetPosition: "left", sourcePosition: "right"},
    { id: '3', data: { onClick: onClick, img: "miohippus.jpeg" }, type: 'click', position: { x: 5/10 * width, y: 1/8 * height}, targetPosition: "left", sourcePosition: "right"},
    { id: '4g', position: { x: 13/20 * width, y: 0 * height}, targetPosition: "left", sourcePosition: "right", style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 104, height: 76 }},
    { id: '4', data: { onClick: onClick, img: "merychippus.jpeg" }, type: 'click', position: { x: 13/20 * width, y: 0 * height }, targetPosition: "left", sourcePosition: "right"},
    { id: '56g', position: { x: 4/5 * width, y: 3/16 * height}, targetPosition: "left", sourcePosition: "right", style: { backgroundColor: 'rgba(173, 216, 220, 0.2)', width: 104, height: 1/8 * height + 76 }},
    { id: '5', data: { onClick: onClick, img: "pliohippus.jpeg" }, type: 'click', position: { x: 4/5 * width, y: 3/16 * height}, targetPosition: "left", sourcePosition: "right"},
    { id: '6', data: { onClick: onClick, img: "equus.jpeg" }, type: 'click', position: { x: 4/5 * width, y: 5/16 * height }, targetPosition: "left", sourcePosition: "right"},
    { id: 'invg', position: { x: 13/20 * width, y: 1/4 * height}, targetPosition: "left", sourcePosition: "right", style: { backgroundColor: 'rgba(255, 255, 0, 0.2)', width: 104, height: 76 }},
    { id: 'inv', data: { onClick: onClick, img: "merychippus.jpeg" }, type: 'click', position: { x: 13/20 * width, y: 1/4 * height }, targetPosition: "left", sourcePosition: "right"}
  ];
  const edges1 = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e3-inv', source: '3', target: 'inv', animated: true },
    { id: 'einv-5', source: 'inv', target: '5', animated: true },
    { id: 'einv-6', source: 'inv', target: '6', animated: true }
  ];
  const data = [{da: 70}, {da: 60}, {da: 50}, {da: 40}, {da: 30}, {da: 20}, {da: 10}, {da: 0}]
  const [nodes, setNodes] = useState(nodes1);
  const [edges, setEdges] = useState(edges1);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <div>
      <div style={{fontSize: '40px', marginLeft: '20px', marginRight: '10px', marginTop: '10px'}}><strong>The Evolution of the Modern Horse</strong></div>
      <div style={{fontSize: '16px', marginLeft: '20px', marginRight: '10px', marginTop: '10px'}}>The horse is normally used as a primary example of evolution, because of its familiarity and obvious, trackable trait changes over generations. We not only have a clear picture of the evolution of the horse, due to its fossils and its ancestors' fossils being widespread and recent, but we can also see obvious changes throughout the generations, including leg length, tooth length, and number of bones in various body parts, all of which are traits that are more or less preserved in fossils. However, even with this clear history or maybe because of it) scientists are constantly discovering new classifications and evolving traits in the horse, which can help advance our understanding of the evolution of the horse.</div>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodesDraggable={false}
        nodesConnectible={false}
        style={flowStyles}
        nodeTypes={nodeTypes}
        defaultZoom={1}
        minZoom={0.8}
        maxZoom={2}
        panOnDrag={false}
        zoomOnScroll={false}
      />
      <BarChart
          width={width}
          height = {100}
          data={data}
          margin={{
              right: 100,
              left: 100,
              bottom: 5,
          }}
      >
          <text x={1/2 * width} y={30} fill="black" textAnchor="middle" dominantBaseline="central">
              <tspan fontSize="14">Time (millions of years ago)</tspan>
          </text>
          <XAxis dataKey="da" tick={{fontSize: 20}}/>
      </BarChart>
      <div style={{fontSize: '16px', marginLeft: '20px', marginRight: '10px', marginTop: '10px'}}>Sorry I was going to put the class names of the horses, but closed the document :( (the colors for the horses correspond to what tribe the horses are in)</div>
    </div>
  );
}

export default Flow;
