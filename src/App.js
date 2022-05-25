import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Score from "./components/Score";

function App() {
  return (
    <div className="App">
      <Container>
        <Route path="/" exact component={Home}/>
        <Route path="/score/:day" exact component={Score}/>
      </Container>
    </div>
  );
};

const Container = styled.div `
  max-width: 350px;
  min-height: 80vh;
  background-color: #fff;
  margin: 3px auto;
  border-radius: 10px;
  border: 1px solid #ddd;
`;
export default App;
