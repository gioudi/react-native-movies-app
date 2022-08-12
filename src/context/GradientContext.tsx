import React, {createContext, useState} from 'react';
import ImageColors from 'react-native-image-colors';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  prevousColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPreviousMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({});

export const GradientProvider = ({children}: any) => {
  const [colors, setColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [previousColors, setPreviousColors] = useState<ImageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: ImageColors) => {
    setColors(colors);
  };
  const setPreviousMainColors = (colors: ImageColors) => {
    setPreviousColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{colors, previousColors, setMainColors, setPreviousMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
