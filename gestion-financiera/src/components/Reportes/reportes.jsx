import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Navbar from '../Navbar';

const reportes = () => {
    return (

      <div className="app-container">
        <div className="container">
            <Navbar />
          <h1>Reportes</h1>
          <h4>Seleccione el ranga de fecha para obtener el reporte</h4>

          <LocalizationProvider dateAdapter={AdapterDayjs}> 
            <DemoContainer components={['DatePicker']}>
                <DatePicker label="Basic date picker" />
            </DemoContainer>
          </LocalizationProvider>
        
        
        </div>
      </div>
    );
  };
  
  export default reportes;
