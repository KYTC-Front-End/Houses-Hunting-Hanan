import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.css'


export default function cards({houses}) {
    const {
    id,
    title,
    location,
    bedroom,
    bathroom,
     description,
    price,
    image,
  } = houses;
    return (
    <Card sx={{ maxWidth: 345 }}  id='card-contaier'>
      
      <CardMedia  
        sx={{ height: 140 }}
        image= {image}
        id='media'
      />
      <CardContent>
        <div >
        <Typography gutterBottom variant="h5" component="div" id='title-card' >
        {title}
        </Typography>
       
        </div>
        <div className='icon-details'>
        <Typography variant="body2" color="primary.main" id='location-container'>
          <div id='bath-continer' >
          <BathtubIcon id='bathh'/> <div id='bathroom'>{ "ba" +" "+bathroom}</div>
          </div>
         <div id='bed-continer'>
         <BedIcon id='bed' /> <div id='bedroom'>{"bd"+" "+bedroom }</div>
         </div>
         <div id='location-contanier'>
         <LocationOnIcon id='loca'/> <div id='locationn'>{location}</div>
         </div>
           </Typography>
           </div>
          <Typography variant="body2" color="primary.main" id='description-contanier'>
           <div id='description'>{description.slice(0, 60)} </div>
    </Typography>
      </CardContent>
      <CardActions id='learn-contanier'>
        <div id='cardTitle-contaier'> 
        <Link to={`/details/${id}`} id='learn'>More Detalil</Link>
           <Typography gutterBottom variant="h5" component="div" id='price'>
        {price+"$"}
        </Typography>
      
      </div>
      </CardActions>
    </Card>
  );
}