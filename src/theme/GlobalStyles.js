import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
        display: flex;
        flex-direction: column;
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: ${props => props.theme.colors.primary};
        font-family: ${props => props.theme.fonts.base};
        font-size:  ${props => props.theme.fonts.size};
    }
    main{
        padding: 2% 4%;

    }
    button,a{
        font-family: ${props => props.theme.fonts.base};
        font-size:  ${props => props.theme.fonts.size};
    }
`;

export default GlobalStyle;