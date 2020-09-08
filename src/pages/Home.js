import React from "react";

function Home(){
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
      <Row text = "center">
      <BDiv style = {{width:"4%" }} />
        <Col   style = {{marginTop:"30%" }}>
          <img width = "100%" src={baseUrlSite.site + "img/orthodox2.png"} />
        </Col>
         <Col  style = {{marginTop:"35%"}}>
          <img width = "100%" src={baseUrlSite.site + "img/graphicscpn2.png"} />
        </Col>
         <Col  style = {{marginTop:"35%"}}>
          <img width = "100%" src={baseUrlSite.site + "img/painting2.png"} />
        </Col>
         <Col   style = {{marginTop:"30%"}}>
          <img width = "100%" src={baseUrlSite.site + "img/foto2.png"} />
        </Col>
        <BDiv style = {{width:"4%" }} />
      </Row>
      
     
    </BDiv>
  )
} 