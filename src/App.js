import React from "react";
import "./App.css";
import NasaGrid from './NasaGrid';
import styled  from 'styled-components'

const WrapperDiv = styled.div `
    font-size:40px;
    color:red;
`
function App(props) {
  return (
    <div className="App">
      <WrapperDiv>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!z
      </p>
      </WrapperDiv>
      <NasaGrid />
    </div>
  );
}

export default App;
