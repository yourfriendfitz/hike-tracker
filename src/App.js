import React from "react";
import HikingTracker from "./components/HikingTracker";
import { Container as BootstrapContainer } from "reactstrap";
import styled from "styled-components";
import * as Palette from "./components/Palette";

const Container = styled.div`
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Primary},
    ${Palette.AltPrimary}
  );
  display: grid;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Container>
      <HikingTracker />
    </Container>
  );
}

export default App;
