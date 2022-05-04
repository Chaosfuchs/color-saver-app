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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 300px;
  height: 150px;
  padding: 30px;
  margin: 20px;
  border: 3px solid black;
  border-radius: 15px;
  background-color: beige;

  input {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;
