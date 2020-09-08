import React from "react";
import { Container } from "bootstrap-4-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nopage from "../containers/Nopage";
function Painting() {
  return (
    <Container>
      <Nopage />
    </Container>
  );
}
export default Painting;
