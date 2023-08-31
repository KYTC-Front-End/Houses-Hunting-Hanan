import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { TextField,Slider } from '@mui/material';
import CardContainer from '../../Components/CardContainer';
import FormLabel from '@mui/material/FormLabel';
import './style.css'

const SearchBar =()=>{


  const [location, setLocation] = useState('');
  const [bedroom, setBedroom] = useState();
  const [bathroom, setBathroom] = useState();
  const [selectedType, setSelectedType] = useState('');
  const [price , setPrice] = useState(100);
  const [housesData, setHousesData] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

      useEffect(() => {
      fetchData();
         }, []);

      const fetchData = async () => {
       
         try {
          const response = await fetch("https://my-json-server.typicode.com/ansam-mohammed/api/houses");

          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setHousesData(data);
         
      } catch (error) {
          console.error('Error fetching data:', error);
         
      }

   

   
  };
  const handleSearch = (event) => {
      event.preventDefault();
      const filteredHouses = housesData.filter((house) =>
          (bedroom ? house.bedroom === +bedroom : true))
          .filter((house) => (bathroom ? house.bathroom === +bathroom : true))
          .filter((house) => (price === '' ? house.price === +price : true))
          .filter((house) => (location? house.location.toLowerCase().includes(location.toLowerCase()) : true));
      setFilteredHouses(filteredHouses);
            console.log(filteredHouses, 98984);

  };
  const handleResetFilter = () => {
      setLocation('');
      setBedroom('');
      setBathroom('');
      setPrice('')
      setFilteredHouses([]);
  };
  const handleBedroomChange = (event) => {
      setBedroom(event.target.value);
  };
  const handleBathroomChange = (event) => {
      setBathroom(event.target.value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
};
  const handlePriceChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPrice(newValue)
};

  

        
        return(
          <>
 <div id='headerr'>
            <div id='containerr' >
                             
                    <TextField sx={{ ml: 5, flex: 1, }}
                        placeholder="Location "
                        inputProps={{ 'aria-label': 'search google maps' }}
                        value={location} 
                        onChange={handleLocationChange}
                        id='loc' 
                    />
             
     
            </div>
            <div  id='textf'>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bedroom'
                        value={bedroom}
                        name="bedroom"
                        type='number'
                        onChange={handleBedroomChange}
                        displayEmpty
                        id='bedd'
                    />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bathroom'
                        value={bathroom}
                        name="bathroom"
                        type='number'
                        onChange={handleBathroomChange}
                        displayEmpty
                        id='bed'
                    />
                </FormControl>



                <FormControl sx={{ marginLeft: '20px' }}>
                <FormLabel style={{color: '#FF8243'}}>Price</FormLabel>
        

         <Slider style={{
           color:'#FF8243',
           width:'180px'
         }}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-label="range-slider"
        value={price}
        step={100}
        min={1000}
        max={7000}
        variant="outlined"
      />   

      </FormControl>


          

            </div>

              <Button 
                    variant="contained"
                    onClick={handleSearch}
                    style={{
                        backgroundColor: '#EB9235',
                        marginTop:'60px',
                        color: 'white',
                        height: '50px',
                        width:'850px',
                        letterSpacing: '1px',
                        fontWeight: 'bolder',
                        textTransform:'capitalize'
                    }}
                >
                    Search
                    </Button> 
                 
            <div id='cardcon'>
               <CardContainer houses={filteredHouses} />
            </div>
        </div>

          </>
        )


}


export default SearchBar;
