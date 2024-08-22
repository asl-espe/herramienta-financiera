import React from 'react';
import '../Reportes/stylessReportes.css'
import Navbar from '../Navbar';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


const ReportPDF= () => {
  return (
    <div className="app-container">
      
      <div class="container" >
        <h1>Reportes</h1>
        <div>
          
            <FormControl>
              <FormLabel >Seleccione el tipo de reporte que desea: </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                
                name="radio-buttons-group"
              >
                <FormControlLabel value="productos" control={<Radio />} label="Productos" />
                <FormControlLabel value="catalogo" control={<Radio />} label="Catalogo" />
                <FormControlLabel value="materiales" control={<Radio />} label="Materiales adquiridos" />
              </RadioGroup>
            </FormControl>
          
        </div>
      </div>
    </div>
  );
};

export default ReportPDF;
