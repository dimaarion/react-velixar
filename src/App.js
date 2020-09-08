import React from "react";
import "./style.css";
import "./css/bootstrap.css";
import "./css/app.css";
import Home from "./pages/Home";
import Orthodox from "./pages/Orthodox";
import Graphics from "./pages/Graphics";
import Painting from "./pages/Painting";
import Foto from "./pages/Foto";
import baseUrlSite from "./sittens/baseUrlSite.json";
import { Container, Row, Col, BDiv } from "bootstrap-4-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/orthodox">
          <Orthodox/>
        </Route>
        <Route path="/graphics">
          <Graphics/>
        </Route>
         <Route path="/painting">
          <Painting/>
        </Route>
        <Route path="/foto">
          <Foto/>
        </Route>
         <Route>
         <h1>Такой страницы не существует</h1>
        </Route>
      </Switch>
      
    </Router>
  );
}
