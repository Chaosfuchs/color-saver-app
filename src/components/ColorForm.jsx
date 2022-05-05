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
      <input
        className="text"
        type="text"
        value={color}
        onChange={handleChange}
      />
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
  align-items: center;
  gap: 10px;
  width: 300px;
  height: 250px;
  padding: 30px;
  margin: 20px;
  border: 3px solid black;
  border-radius: 15px;
  background-color: beige;

  input {
    width: 70%;
    height: 100%;
    margin: 0;
    padding: 0;
    text-align: center;
  }

  input.text {
    height: 40%;
  }

  button {
    width: 80%;
    height: 100%;
    border-radius: 10px;
    background-color: lightblue;
  }
`;
