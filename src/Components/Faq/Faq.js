import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import './Faq.css'

export default function AccordionUsage() {
    return (
        <div className='feq_main' >
            <hr style={{ border: "1px solid white", margin: "5px 0" }} />

            <Accordion >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colur' />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    className='colur'
                >
                    Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?
                </AccordionSummary>
                <AccordionDetails className='colur'>
                    Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?
                </AccordionDetails>
            </Accordion>
            <hr style={{ border: "1px solid white", margin: "5px 0" }} />

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colur' />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    className='colur'

                >
                    Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?
                </AccordionSummary>
                <AccordionDetails className='colur'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <hr style={{ border: "1px solid white", margin: "5px 0" }} />

            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colur' />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className='colur'

                >
                    Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?
                </AccordionSummary>
                <AccordionDetails className='colur'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <hr style={{ border: "1px solid white", margin: "5px 0" }} />
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colur' />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className='colur'

                >
                    Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?
                </AccordionSummary>
                <AccordionDetails className='colur'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <hr style={{ border: "1px solid white", margin: "5px 0" }} />
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon className='colur' />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    className='colur'

                >
                   Sagittis consectetur gravida nec turpis eros, id sit et, dictum?
                </AccordionSummary>
                <AccordionDetails className='colur'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            
            

        </div>
    );
}
