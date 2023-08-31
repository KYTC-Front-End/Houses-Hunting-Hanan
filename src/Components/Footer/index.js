import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import'./style.css';


function Footer() {
    return (
      <AppBar position="static" id='footer' >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="body1" id='foot' >
              © 2023 House Hunting . all copyright reserved
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
     
    );
  }
  export default Footer;