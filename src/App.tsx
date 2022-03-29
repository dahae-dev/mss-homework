import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';

import Main from 'pages/Main';
import queryClient from 'services/queryClient';
import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </QueryClientProvider>  
  );
};

export default App;
