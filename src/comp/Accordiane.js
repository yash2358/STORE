import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button } from '@mui/material';

export default function Accordiane() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Mobile</Typography>
        </AccordionSummary>
        <AccordionDetails>
       
          <Typography>
           All types of smartphones are available with best price.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Laptop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Best featured laptops with best prices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Clothes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           All types of clothes are avilable at best prices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Food</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fresh food items at good price.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
