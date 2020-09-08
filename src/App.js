import React from "react";
import "./style.css";
import "./css/bootstrap.css"
import "./css/app.css"
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';
export default function App() {
  return (
    <BDiv className = "app">
    <img className = "fon" src = "https://cdn.jsdelivr.net/gh/dimaarion/react-velixar@master/public/img/fon3.png"/>
   <Row >
<Col>
<img width = "100%" src = "https://cdn.jsdelivr.net/gh/dimaarion/react-velixar@master/public/img/interface.png"/>
</Col>
<Col>
<img width = "100%" src = "https://cdn.jsdelivr.net/gh/dimaarion/react-velixar@master/public/img/interface.png"/>
</Col>
   </Row>
     
    </BDiv>
  );
}
