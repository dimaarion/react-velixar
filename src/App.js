import React from "react";
import "./style.css";
import "./css/bootstrap.css";
import "./css/app.css";
import baseUrlSite from "./sittens/baseUrlSite.json";
import { Container, Row, Col, BDiv } from "bootstrap-4-react";
export default function App() {
  console.log(baseUrlSite);
  return (
    <BDiv className="app">
      <img className="fon" src={baseUrlSite.site + "img/fon3.png"} />
      <img
        className="logo"
        width="100%"
        src={baseUrlSite.site + "img/interface.png"}
      />
      <img
        className="photo"
        width="100%"
        src={baseUrlSite.site + "img/interface4.png"}
      />
      <img
        className="arnament"
        width="100%"
        src={baseUrlSite.site + "img/interface2.png"}
      />
      <Row>
        <Col />
        <Col />
      </Row>
    </BDiv>
  );
}
