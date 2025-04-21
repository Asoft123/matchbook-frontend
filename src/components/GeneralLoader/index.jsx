import React from "react";
import { Colors } from "/src/utils/colors";
import styled from "styled-components";
import { RotatingLines } from "react-loader-spinner";

const Container = styled.div`
  background: rgba(255, 255, 255, 0.5);
  position: fixed;
  color: ${Colors.white};
  z-index: 200;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
`;
function GeneralLoader() {
  return (
    <Container>
      <RotatingLines
        visible={true}
        height="35"
        width="35"
        strokeColor={Colors.dukeBlue}
        color="white"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Container>
  );
}

export default GeneralLoader;
