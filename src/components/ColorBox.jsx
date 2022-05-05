import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

export default function ColorBox({ color, onChange, onDelete }) {
  const [fetchedData, setFetchedData] = useState(false);
  const [colorName, setColorName] = useState('');
  if (fetchedData) {
    setTimeout(() => setFetchedData(false, 1000));
  }

  useEffect(() => {
    async function fetchName() {
      try {
        const response = await fetch(
          `https://www.thecolorapi.com/id?hex=${color.slice(1)}`
        );
        const data = await response.json();
        setColorName(data.name.value);
      } catch (message) {
        console.error(message);
        setColorName('');
      }
    }
    fetchName();
  }, [color]);

  function handleClick() {
    navigator.clipboard.writeText(color);
  }

  return (
    <StyledBox backgroundColor={color} onClick={handleClick}>
      <span>{colorName}</span>
      <input
        type="text"
        value={color}
        onChange={event => onChange(event.target.value)}
      />
      <button onClick={onDelete}>x</button>
    </StyledBox>
  );
}

const StyledBox = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 15px;
  background: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid black;
  cursor: pointer;

  span {
    padding: 5px 10px;
    background-color: #eee;
    border-radius: 10px;
    text-align: center;
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
