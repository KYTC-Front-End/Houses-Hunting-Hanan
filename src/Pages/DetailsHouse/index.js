import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import deatlies from '../../Utils/images/modern-residential-district-with-green-roof-balcony-generated-by-ai 5.png'
import deatlies2 from'../../Utils/images/3d-rendering-loft-scandinavian-living-room-with-working-table-bookshelf 5.png'
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import Button from '@mui/material/Button';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import AddIcon from '@mui/icons-material/Add';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import { Link } from 'react-router-dom';

import './style.css'

function Detail(){
const {id} = useParams();
const[houses , setHouse] = useState([]);

useEffect(() => {
fetch(`https://my-json-server.typicode.com/ansam-mohammed/api/houses/${id}`)
 .then((response) => response.json())
 .then((data) => {
   setHouse(data);
   console.log(data, 'ddd');
 })
 .catch((error) => {
   console.error("There was a problem with the fetch operation:", error);
 });
}, [id]);


    return(


    <Container  id='root'>
         
            <Grid xs="12" sm="12" md="6" lg="6" id='imgSection'>
              <div  id='imageBox'>
              <img src={houses.image} id='img1'/>
              <div>
                <img src={deatlies} id='img2'/>
                 <img src={deatlies2} id='img3'/>
              </div>
              </div>
            </Grid>
            <Grid xs="12" sm="12" md="6" lg="6" id='desc'>
              <Typography variant="h2" id='h2'>{houses.title}</Typography>
              <Typography id='priceDetails'>
                <span> ${houses.price} / week</span>
                <span >
                  <LocationOnIcon id='location'/>
                  <Typography>{houses.location}</Typography>
                </span>
              </Typography>

              <Typography id='descDetails'>
                {houses.description}
              </Typography>
              <div id='continer'>
             <Typography id="title"> 
             <BathtubIcon id='bath'/> bathroom:  {houses.bathroom}</Typography>
              <Typography id="title">
                 <BedIcon id='bath'/> bedroom:   {houses.bedroom}</Typography>
              </div>
              <div id='descAddress'>
                <Typography style={{color:'#7D7D7D'}}>
                <AccountCircleIcon id='account'/>  Hanan Iyad ALFere </Typography>
                <Typography>
                  <MarkEmailReadIcon id='account' /> alfrhnan@gmail.com
                </Typography>
                <Typography>
                  <LocalPhoneIcon id='account' /> +9700000
                </Typography>
              </div>
              <div id='descBtn'>
                
                  <Button
                    variant="contained"
                    color="primary"
                    id='favriteBtn'
                  
                  >
                  
                      <>
                        <AddIcon /> favorite{' '}
                      </>

                  </Button>
                
                <Link to='/'id='backLink'>
                  Back
                </Link>
              </div>
            </Grid>

            <Grid lg="12" >
            
          </Grid>
           
        
      
    </Container>
  




    );
}

export default Detail;