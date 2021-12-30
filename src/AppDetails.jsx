import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


/**
 * A table of user-defined filters to apply to the graph.
 * For example: "only show person nodes with the name 'John'".
 * 
 * Filter by: Node/Edge type, or Node/Edge attribute.
 * 
 */
 function GraphLegend({ }) {
  return (
    <p>I'm the graph legend!</p>
  );
}

/**
 * A table of user-defined filters to apply to the graph.
 * For example: "only show person nodes with the name 'John'".
 * 
 * Filter by: Node/Edge type, or Node/Edge attribute.
 * 
 */
function GraphFilters({ }) {
  return (
    <p>I'm the graph filters!</p>
  );
}

/**
 * Displays the attributes of a selected node or edge.
 */
 function GraphDetails({ }) {
  return (
    <p>I'm the graph details!</p>
  );
}

export default function AppDetails({}) {
  const [activeTab, setActiveTab] = React.useState(0);
  const handleSetActiveTab = (event, newActiveTab) => {
    setActiveTab(newActiveTab);
  };

  return (
    <div 
      className="app-details" 
      style={{ 
        width: "100%",
        height: "100%",
        // overflow: "hidden",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <div style={{ marginTop: "69px", }} />
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={activeTab} 
          onChange={handleSetActiveTab} 
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Graph Legend" />
          <Tab label="Graph Details" />
          <Tab label="Graph Filters" />
        </Tabs>
      </Box>
      <Box
        style={{
          marginLeft: "10px",
        }}
      >
        { activeTab === 0 && <GraphLegend /> }
        { activeTab === 1 && <GraphDetails /> }
        { activeTab === 2 && <GraphFilters /> }
      </Box>
    </div>
  );
}
