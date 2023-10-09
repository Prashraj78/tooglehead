import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

export function Accr() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="pt-24 sm:px-16 px-4">
      <div className="text-center">
        <p className="text-xl text-[#12406F] font-semibold">FAQ</p>
      </div>
      <Accordion open={open === 1} >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`font-medium flex justify-between items-center text-[18px] ${open === 1 ? 'text-[#12406F]' : 'text-[#525252]'}`}
        >
          <p className="flex-1">How does an investor gain access to MF Utility?</p>
          <div className="flex items-center ml-2"> 
            {open === 1 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </AccordionHeader>


        <AccordionBody className={`${open === 1 ? 'text-[#12406F]' : 'text-[#525252]'}`}>
          How does an investor gain access to MF Utility?
        </AccordionBody>

      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}
          className={`font-medium text-[18px] ${open === 2 ? 'text-[#12406F]' : 'text-[#525252]'
            }`}
        >
           <p className="flex-1">Will investors be able to have multiple Common Account Numbers?</p>
          <div className="flex items-center ml-2"> 
            {open === 2 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </AccordionHeader>
        <AccordionBody className={`${open === 2 ? 'text-[#12406F]' : 'text-[#525252]'}`}>
          Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} >
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`font-medium text-[18px] ${open === 3 ? 'text-[#12406F]' : 'text-[#525252]'
            }`}
        >
           <p className="flex-1">How does an investor gain access to MF Utility?</p>
          <div className="flex items-center ml-2"> 
            {open === 3 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </div>
        </AccordionHeader>

        <AccordionBody className={`${open === 3 ? 'text-[#12406F]' : 'text-[#525252]'}`}>
          How does an investor gain access to MF Utility?
        </AccordionBody>

      </Accordion>
    </div>
  );
}