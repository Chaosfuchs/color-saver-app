import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ColorBox from './components/ColorBox';
import ColorForm from './components/ColorForm';

const COLORLIST = [
  { id: 0, hexCode: '#F72585' },
  { id: 1, hexCode: '#B5179E' },
  { id: 2, hexCode: '#7209B7' },
  { id: 3, hexCode: '#560BAD' },
  { id: 4, hexCode: '#480CA8' },
  { id: 5, hexCode: '#3A0CA3' },
  { id: 6, hexCode: '#3F37C9' },
  { id: 7, hexCode: '#4361EE' },
  { id: 8, hexCode: '#4895EF' },
  { id: 9, hexCode: '#4CC9F0' },
];

export default function App() {
  const [hexColors, setHexColor] = useState(COLORLIST);

  function handleDelete(colorID) {
    const newColorList = hexColors.filter(color => color.id !== colorID);
    setHexColor(newColorList);
  }

  function handleUpdate(id, newHexCode) {
    console.log({ id, newHexCode });
    const newColorList = hexColors.map(color => {
      if (color.id === id) {
        return {
          ...color,
          hexCode: newHexCode,
        };
      } else {
        return color;
      }
    });
    setHexColor(newColorList);
  }

  function handleSubmit(newColor) {
    const newColors = [newColor, ...hexColors];
    setHexColor(newColors);
    window.localStorage.setItem('colorList', JSON.stringify(newColors));
  }
  useEffect(() => {
    const locallySavedValue = window.localStorage.getItem('colorList');
    if (locallySavedValue !== null) {
      console.log('using local storage');
      setHexColor(JSON.parse(locallySavedValue));
    }
  }, []);

  return (
    <CardFlex>
      <ColorForm onSubmit={handleSubmit} />
      {hexColors.map((color, index) => (
        <ColorBox
          key={index}
          color={color}
          onDelete={() => console.log(color)}
        />
      ))}
    </CardFlex>
  );
}

const CardFlex = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
