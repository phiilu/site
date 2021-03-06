import { createGlobalStyle } from 'styled-components'
import fontFiles from './fonts.js'

const GlobalStylesComponents = createGlobalStyle`
  @font-face {
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local("Source Sans Pro"), url(${
      fontFiles.SourceSansProRegular
    }) format("woff");
  }

    @font-face {
    font-family: "M PLUS Rounded 1c";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local("M PLUS Rounded 1c"), url(${
      fontFiles.MPlusRounded1cRegular
    }) format("woff"), url(${
  fontFiles.MPlusRounded1c100
}) format("woff"), url(${fontFiles.MPlusRounded1c300}) format("woff"), url(${
  fontFiles.MPlusRounded1c500
}) format("woff"), url(${fontFiles.MPlusRounded1c700}) format("woff"), url(${
  fontFiles.MPlusRounded1c800
}) format("woff"), url(${fontFiles.MPlusRounded1c900}) format("woff");
  }
`

export default GlobalStylesComponents
