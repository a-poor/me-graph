import React from "react";
import CytoscapeComponent from 'react-cytoscapejs';

export default function AppGraph({  }) {
  const elements = [
    { data: { id: 'one', label: 'Node 1' } },
    { data: { id: 'two', label: 'Node 2' } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
  ];


  return (
    <div 
      className="app-graph" 
      style={{ 
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <CytoscapeComponent 
        elements={elements} 
        style={{ 
          width: '100%', 
          height: '100%' 
        }}
        layout={{
          name: 'grid',
        }}
      />
    </div>
  );
}
