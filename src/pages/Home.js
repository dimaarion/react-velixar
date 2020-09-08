import React from "react";
import "../style.css";
import "../css/bootstrap.css";
import "../css/app.css";
import baseUrlSite from "../sittens/baseUrlSite.json";
import { Container, Row, Col, BDiv } from "bootstrap-4-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Home() {
  return (
    <BDiv className="app" style = {{backgroundImage:"url(" + baseUrlSite.site + "img/fon3.png)"}}>
      <img
        className="arnament"
        width="100%"
        src={baseUrlSite.site + "img/interface2.png"}
      />
      <Row>
        <BDiv style={{ width: "3%" }} />
        <Col>
          <Link to="/">
            {" "}
            <img
              className="logo"
              width="100%"
              src={baseUrlSite.site + "img/logo2.png"}
            />
          </Link>
        </Col>
        <Col>
          <img
            className="photo"
            width="100%"
            src={baseUrlSite.site + "img/velixar2.png"}
          />
        </Col>
        <Col col="1" />
      </Row>

      <Row text="center">
        <BDiv style={{ width: "4%" }} />
        <Col style={{ marginTop: "30%" }} className="orthodox">
        <Link to = "orthodox"><img width="100%" src={baseUrlSite.site + "img/orthodox2.png"} /></Link>
          
        </Col>
        <Col style={{ marginTop: "35%" }}>
          <img width="100%" src={baseUrlSite.site + "img/graphicscpn2.png"} />
        </Col>
        <Col style={{ marginTop: "35%" }}>
          <img width="100%" src={baseUrlSite.site + "img/painting2.png"} />
        </Col>
        <Col style={{ marginTop: "30%" }}>
          <img width="100%" src={baseUrlSite.site + "img/foto2.png"} />
        </Col>
        <BDiv style={{ width: "4%" }} />
      </Row>
    </BDiv>
  );
}
export default Home;
