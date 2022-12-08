import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
	font-family: 'Roboto', sans-serif;
  background-color: #f6fcff;
  width: 100%;
  min-height: 100vh;
}

`
