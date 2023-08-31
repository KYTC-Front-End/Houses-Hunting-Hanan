import React , {useState,useEffect} from "react";
import Typography from '@mui/material/Typography';
import CustomizedInputBase from '../../Components/SearchBar';
import CardContainer from "../../Components/CardContainer";
import'./style.css';

const Landing =()=>{
    const[houses , setHouse] = useState([]);

     useEffect(() => {
    fetch("https://my-json-server.typicode.com/ansam-mohammed/api/houses")
      .then((response) => response.json())
      .then((data) => {
        setHouse(data);
        console.log(data, 'ddd');
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

    return(
      <>
     <div id='hearder'>
      
     <Typography  variant="h3"
      component="h2"
       textAlign="center"
       id="hero"
       >Let Find a Home Thats Perfact for you</Typography>
       <CustomizedInputBase id='search'/>
      </div>

      <div id='housesSection'>
              <Typography variant="h2" id='sectionTitle'>
              Top-Rated
              </Typography>
              <CardContainer
                  houses={houses}
                />
              </div>
              
         <div id="housesSection">
              <Typography variant="h2" id='sectionTitle'>
                Newest
              </Typography>
  
                <CardContainer houses={houses} />
              
            </div>

             
      </>
        

       
    )

}

export default Landing ;