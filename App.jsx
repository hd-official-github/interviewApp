
import React from 'react'
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Appstack from './src/navigation/app/Appstack';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#000',
    secondary: '#159bf0',
  },
};
export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Appstack />
      </NavigationContainer>
    </PaperProvider>
  );
}
