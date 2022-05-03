import styled from 'styled-components';
import { useState } from 'react';

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
  display: flex;
  flex-direction: column;
  gap: w0px;
  width: 150px;
  height: 150px;
  padding: 20px;
  background-color: lightgray;
  border: 2px solid black;
  border-radius: 15px;

  input {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;
