// .storybook/preview.js

import { withThemes } from '@react-theming/storybook-addon';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';


const providerFn = ({ theme, children }) => {
  return <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    {children}
    </>
    </ThemeProvider>;
};
// pass ThemeProvider and array of your themes to decorator
addDecorator(withThemes(null,[theme], {providerFn}));