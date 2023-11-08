import P from 'prop-types';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyle';
import theme from '.';

interface Props {
  children: ReactNode;
}

export const MyThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle /> {children}
    </ThemeProvider>
  );
};

MyThemeProvider.propTypes = {
  children: P.node.isRequired,
};
