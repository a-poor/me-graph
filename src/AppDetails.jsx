import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import GraphLegend from "./GraphLegend";
import GraphDetails from "./GraphDetails";
import GraphFilters from "./GraphFilters";


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
