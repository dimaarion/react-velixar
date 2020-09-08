import React from "react";
 import { Container } from "bootstrap-4-react";
 import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Nopage(){
    return (
     <Container>
     <h1>Страница Находится в разработке.</h1> <h3><Link to = "/">Перейти на главную страницу</Link></h3>
     </Container>
    )
}export default Nopage