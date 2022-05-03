import styled, { css } from 'styled-components';

export default function Box({ color }) {
  return (
    <StyledBox backgroundColor={color} onClick={handleClick}>
      <span>{color}</span>
    </StyledBox>
  );
  function handleClick() {
    navigator.clipboard.writeText(color);
  }
}

const StyledBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background: ${props => props.backgroundColor};
  display: grid;
  place-content: center;
  border: 3px solid black;
  cursor: pointer;

  span {
    padding: 5px 10px;
    background-color: #eee;
    border-radius: 10px;
  }
`;
