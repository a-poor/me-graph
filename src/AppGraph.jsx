import React from "react";
import CytoscapeComponent from "react-cytoscapejs";
import Cytoscape from 'cytoscape';
import COSEBilkent from 'cytoscape-cose-bilkent';

import graphData from "./data.json";

Cytoscape.use(COSEBilkent);

export default function AppGraph({}) {
  const elements = [...graphData.nodes, ...graphData.edges].map((d) => ({
    data: d,
  }));

  return (
    <div
      className="app-graph"
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "68px", }}/>
      <CytoscapeComponent
        elements={elements}
        style={{
          width: "100%",
          height: "100%",
        }}
        layout={{
          name: "cose-bilkent",
          padding: 20,
          idealEdgeLength: 150,
        }}
        stylesheet={[
          {
            selector: "node",
            style: {
              label: e => `${e.data("type")}: ${e.data("label")}`,
            },
          },
          {
            selector: "edge",
            style: {
              label: "data(type)",
            },
          },
        ]}
        cy={cy => {
        }}
      />
    </div>
  );
}
