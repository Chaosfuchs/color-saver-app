import styled, { css } from 'styled-components';

export default function ColorBox({ color, onChange, onDelete }) {
  return (
    <StyledBox backgroundColor={color} onClick={handleClick}>
      <input type="text" value={color} />
      <button onClick={onDelete}>x</button>
    </StyledBox>
  );
  function handleClick() {
    navigator.clipboard.writeText(color);
  }
}

const StyledBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
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

  input {
    width: 100px;
    border-radius: 5px;
    text-align: center;
    padding: 5px;
  }

  button {
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 100px;
  }
`;
