import React,{useState, useEffect} from 'react'
import NasaCard from './NasaCard';
import axios from 'axios';

function NasaGrid(){
    const[pict,setPict] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=7XP3SlPsaA9Pk5p4QkscFZlm05d5SCu5LfJ6BIWM")
        .then(response=>{
           console.log(response);
           console.log(response.data.copyright);
           setPict(response.data.hdurl)

        })
        .catch(error => {
            console.log("no return",error);
        })
    },[]);
    
    return <div className = "container">
        <div className = "entry">
              <NasaCard src = {pict}/>  
        </div>
    </div>
}
export default NasaGrid;