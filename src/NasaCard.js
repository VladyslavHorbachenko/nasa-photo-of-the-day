import React from 'react'
import styled  from 'styled-components'
import { Button,Row,Col, Container } from 'reactstrap';
const NasaImg = styled.img`
    width:300px;
    height:200px;
    object-fit:scale;
`



const NasaCard = props => {
    return (
        <Col xs = "12" sm = "6" md = "4">
        <div className="nasa-card" key={props.id}>
          <NasaImg className="nasa-image" alt="random img" src={props.src} />
          <h2>{props.nasaimg}</h2>
        </div>
        </Col>
      ); 
    };
export default NasaCard;