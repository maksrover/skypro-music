import styled from "styled-components";

const StyledSkelet = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background: #313131;
`;

export default StyledSkelet;
