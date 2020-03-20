import React,{useState, useEffect} from 'react'
import NasaCard from './NasaCard';
import axios from 'axios';
import { Button,Row,Col, Container } from 'reactstrap';
import styled  from 'styled-components'

const ImgSize = styled.div
`   
    display:flex;
    justify-content: space-evenly;
`
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
    
    return <Container>
        <ImgSize>
        <Row>
                <NasaCard src = {pict}/> 
                <NasaCard src = {pict}/> 
                <NasaCard src = {pict}/> 
                </Row>
           
        </ImgSize>
        
        </Container>
}
export default NasaGrid;