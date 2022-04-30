import { AppProps } from 'next/app'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <ThemeProvider theme={theme}> */}
      <GlobalStyles />
      <Component {...pageProps} />
      {/* </ThemeProvider> */}
    </>
  )
}

export default App
