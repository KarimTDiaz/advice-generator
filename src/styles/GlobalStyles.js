import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants/variables';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
}
img{
	max-width: 100%;
	display: block;
}
ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
  }
a {
	text-decoration: none;
	color: inherit;
  }
body {
	display: grid;
    place-items: center;
    min-height: 100vh;
	margin: 0;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
font-family: 'Poppins', sans-serif;
background-color: ${COLORS.bgColor};
}
`;

export { GlobalStyle };
