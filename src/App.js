import React from "react";
import styled from "styled-components";
import SearchBar from "./searchBar";
import Artist from './artist';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    
        <Container>
          <Router>
            <hr />
            <Switch>
              <Route exact path="/">
                <SearchBar />
              </Route>
              <Route path="/artist/:artist" children={<Artist />} />
            </Switch>
          </Router>
        </Container>

  );
};

export default App;

const Container = styled.div`
  text-align: center;
  display: flex;
  padding: 40px;
  justify-content: center;
  flex-direction: column;

  h2 {
    text-align: left;
  }
`;

