import media from "/src/utils/media";
import { Colors } from "/src/utils/colors";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${Colors.appBg};
  box-sizing: border-box;
  min-height: 100vh;
`;
export const LayoutBody = styled.div`
  width: calc(100% - 260px);
  min-height: 100vh;
  background-color: ${Colors.appBg};
  margin-left: 260px;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  ${media.tablet`
    margin-left:0px;
    padding-right:0px;
    width:100%;
    padding: 0px 20px;
`}
  ${media.mobile`

`}
${media.smallMobile`

`}
`;

export const AppBody = styled.div`
  margin-top: 60px;
  width: 100%;
  flex: 1;
  min-height: 100vh;
  background-color: ${Colors.appBg};
`;
