
import {useEffect,useState} from 'react'
import Location from './Location';

import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Locations() {

    const [locations,setLocations]=useState([]);

    const getLocations=()=>{
        fetch('https://rickandmortyapi.com/api/location?page=2%22')
  .then(response => {
    // Check if the response status is OK (status code 200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    // Parse the response data as JSON
    return response.json();
  })
  .then(data => {
    // Do something with the retrieved data
   setLocations(data.results)
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Fetch error:', error);
  });
    }
    

    useEffect(()=>{
        getLocations()
    },[])

  return (
     
      <Grid container spacing={2}>
        
          
            {locations.map(({name,type,dimension,index,url,residents,i})=>{

        return ( <Grid xs={4} key={i}>
                <Item key={index}>
                            <Location name={name} type={type} dimension={dimension}  url={url} residents={residents}></Location>
                </Item> 
                </Grid>)
            })}
        </Grid>
    
         
        
     
   
    
  )
}

export default Locations