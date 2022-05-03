import styled from 'styled-components';
import { useState, useEffect } from 'react';

export default function ColorForm({ onSubmit }) {
  const [color, setColor] = useState('#cccccc');

  return (
    <FormContainer
      action=""
      onSubmit={event => {
        event.preventDefault();
        onSubmit(color);
      }}
    >
      <input type="color" value={color} onChange={handleChange} />
      <input type="text" value={color} onChange={handleChange} />
      <button type="submit">Add Color</button>
    </FormContainer>
  );

  function handleChange(event) {
    setColor(event.target.value);
  }
}

const FormContainer = styled.form`
  box-sizing: border-box;
  display: grid;
  gap: 10px;
  width: 200px;
  height: 200px;
  padding: 20px;

  input {
    width: 100%;
    heigth: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;
