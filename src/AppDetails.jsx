import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function FakeStuff() {
  return (
    <div>
      <p>
        This is a test! This is a test!
      </p>
      <p>
        This is a test! This is a test!
      </p>
      <p>
        This is a test! This is a test!
      </p>
      <p>
        This is a test! This is a test!
      </p>
    </div>
  );
}

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
    <p>I'm the graph legend!</p>
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
  return (
    <div 
      className="app-details" 
      style={{ 
        width: "100%",
        height: "100%",
        overflow: "hidden",
        // overflowY: "scroll",
        // overflowX: "hidden",
      }}
    >
      <div style={{ marginTop: "69px", }} />
      <Accordion>
        <AccordionSummary>
          <Typography>Graph Legend</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GraphLegend />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Graph Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GraphFilters />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary>
          <Typography>Graph Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <GraphDetails />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
