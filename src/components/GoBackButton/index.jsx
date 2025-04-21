import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Colors } from "/src/utils/colors";

const BackBtn = styled.button`
  /* width: auto;
height:40px;
padding:2px 10px;
display:flex;
align-items:center;
gap:5;
background:transparent;
border:none;
outline:none;
cursor:pointer; */
  /* Frame 398 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 10px;
  isolation: isolate;

  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
  background: transparent;
  border: 2px solid #dfe4ea;
`;
function GoBack() {
  const navigate = useNavigate();
  return (
    <BackBtn onClick={() => navigate(-1)}>
      <IconArrowLeft color={Colors.black} />
      {/* <p>Go back</p> */}
    </BackBtn>
  );
}

export default GoBack;
