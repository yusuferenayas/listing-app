import type { AppProps } from 'next/app'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import GlobalStyle from 'src/styles/globalStyles'
import { theme } from 'src/styles/styledTheme'
import SeoHeadTags from 'src/components/Head/SeoHeadTags'
import { envPublicConfig } from 'src/utils/envConfig'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  console.log(envPublicConfig)
  return (
    <StyledThemeProvider theme={theme}>
      <SeoHeadTags
        pageTitle='Next.js starter'
        description='Starting Next.js template with Typescript, styled-components and code-quality toooling'
      />
      <Component {...pageProps} />
      <GlobalStyle />
    </StyledThemeProvider>
  )
}

export default MyApp
