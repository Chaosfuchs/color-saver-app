import { useState, useEffect } from 'react';
import styled from 'styled-components';
import nanoid from 'nanoid';
import ColorBox from './components/ColorBox';
import ColorForm from './components/ColorForm';

const COLORS = [
  { id: '0', hexCode: '#F72585' },
  { id: '1', hexCode: '#B5179E' },
  { id: '2', hexCode: '#7209B7' },
  { id: '3', hexCode: '#560BAD' },
  { id: '4', hexCode: '#480CA8' },
  { id: '5', hexCode: '#3A0CA3' },
  { id: '6', hexCode: '#3F37C9' },
  { id: '7', hexCode: '#4361EE' },
  { id: '8', hexCode: '#4895EF' },
  { id: '9', hexCode: '#4CC9F0' },
];

export default function App() {
  const [colorList, setColorList] = useState(() => {
    const locallySavedValue = window.localStorage.getItem('colorList');
    if (locallySavedValue !== null) {
      console.log('using local storage');
      return JSON.parse(locallySavedValue);
    } else {
      return COLORS;
    }
  });

  function handleSubmit(newColor) {
    const newColorObject = {
      hexCode: newColor,
      id: nanoid(),
    };
    setColorList([newColorObject, ...colorList]);
  }

  function handleDelete(colorId) {
    const newColorList = colorList.filter(color => color.id !== colorId);
    setColorList(newColorList);
  }

  function handleUpdate(id, newHexCode) {
    console.log({ id, newHexCode });
    const newColorList = colorList.map(color => {
      if (color.id === id) {
        return {
          ...color,
          hexCode: newHexCode,
        };
      } else {
        return color;
      }
    });
    setColorList(newColorList);
  }

  useEffect(() => {
    if (colorList.length >= 0) {
      window.localStorage.setItem('colorList', JSON.stringify(colorList));
    }
  }, [colorList]);

  return (
    <CardFlex>
      <ColorForm onSubmit={handleSubmit} />
      {colorList &&
        colorList.map(color => (
          <ColorBox
            key={color.id}
            color={color.hexCode}
            onDelete={() => handleDelete(color.id)}
            onChange={newHexCode => handleUpdate(color.id, newHexCode)}
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
