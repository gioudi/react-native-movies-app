import React, {createContext, useState} from 'react';
import ImageColors from 'react-native-image-colors';

interface ImageColors {
  primary: string;
  secondary: string;
}

interface ContextProps {
  colors: ImageColors;
  previousColors: ImageColors;
  setMainColors: (colors: ImageColors) => void;
  setPreviousMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextProps);

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
  const setPreviousMainColors = (previousColors: ImageColors) => {
    setPreviousColors(previousColors);
  };

  return (
    <GradientContext.Provider
      value={{colors, previousColors, setMainColors, setPreviousMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
