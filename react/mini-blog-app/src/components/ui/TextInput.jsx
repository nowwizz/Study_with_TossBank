import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  width: calc(100% -32px); /* calc: 계산 함수, 100%에서 -32만큼 준다는 뜻 */
  ${(props) => props.height && `height: ${props.height}px;`}
  padding: 16px;
  font-size: 16px;
  line-height: 20px;
`;

function TextInput(props) {
  const { height, value, onChange } = props;

  return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
