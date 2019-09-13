import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addCoordsAction } from "../store/actions";
import {
  Container as BootstrapContainer,
  Button as BootstrapButton
} from "reactstrap";
import * as Palette from "./Palette";
import * as actionCreators from "../store/actionCreators";

const Img = styled.img`
  border-radius: 8px;
  margin: auto;
  margin-top: 8px;
`;
const Container = styled(BootstrapContainer)`
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Secondary},
    ${Palette.AltSecondary}
  );
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 8px;
  width: 350px;
  height: 60vh;
`;

const TitleContainer = styled(BootstrapContainer)`
  display: grid;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Light},
    ${Palette.AltAccent}
  );
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  color: ${Palette.Text};
`;

const Button = styled(BootstrapButton)`
  background-image: linear-gradient(
    to right bottom,
    ${Palette.Dark},
    ${Palette.Light}
  );
  color: ${Palette.Text};
  box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ImgContainer = styled(BootstrapContainer)`
  position: relative;
`;
const DeleteCoordButton = styled(BootstrapButton)`
  position: absolute;
  top: 4%;
  right: 6%;
`;

const DeleteIcon = styled.span`
  height: 4px;
  width: 4px;
`;

const HikingTracker = props => {
  const dispatchCoords = position => {
    console.log(position);
    props.onLocationSet({
      lat: position.coords.latitude,
      long: position.coords.longitude
    });
  };
  useEffect(() => {
    props.onCoordsLoaded();
  }, []);
  console.log(props);
  return (
    <div>
      <TitleContainer>
        {" "}
        <span>
          Welcome to the Hiking Tracker{" "}
          <span role="img" aria-label="none">
            🏔
          </span>
        </span>
      </TitleContainer>
      <Container className="text-center overflow-auto">
        {props.coords.length !== 0
          ? props.coords.map((location, i) => (
              <ImgContainer key={i}>
                {" "}
                <a
                  href={`https://www.google.com/maps/@${location.lat},${location.long}`}
                  target="_blank"
                >
                  {" "}
                  <Img
                    src={`https://maps.googleapis.com/maps/api/staticmap?center="${location.lat},${location.long}"&zoom=14&size=300x300&sensor=false&key=AIzaSyARtOJmZzZmq5Tt0GPd4pCNw8zA3-1Q3is`}
                  />
                </a>
                <DeleteCoordButton>
                  <DeleteIcon role="img" aria-label="none">
                    X
                  </DeleteIcon>
                </DeleteCoordButton>
              </ImgContainer>
            ))
          : "No Locations"}
        <Button
          block
          onClick={() =>
            navigator.geolocation.getCurrentPosition(dispatchCoords)
          }
        >
          Add Current Location
        </Button>
      </Container>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onLocationSet: payload => dispatch(addCoordsAction(payload)),
    onCoordsLoaded: () => dispatch(actionCreators.coordsFetched())
  };
};

const mapStateToProps = state => {
  return {
    coords: state.coords
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HikingTracker);
