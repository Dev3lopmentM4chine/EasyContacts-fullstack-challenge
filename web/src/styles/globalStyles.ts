import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        /* Color */
        --color-primary: #20DC49;
        --color-secondary: #EB5757;
        --color-white: #FFFFFF;
        --color-gray-100: #333333;
        --color-gray-50: #828282;
        --color-gray-40:#999999;
        --color-gray-30: #BDBDBD;
        --color-gray-20: #E0E0E0;
        --color-gray-10: #F2F2F2;
        --color-gray-0: #F5F5F5;

        /* Font: Size */
        --font-size-1: 0.75rem;
        --font-size-2: 0.875rem;
        --font-size-3: 1rem;
        --font-size-4: 1.125rem;
        --font-size-5: 1.375rem;
        --font-size-6: 1.625rem;
        --font-size-7: 1.6875rem;

        /* Font: Weight */
        --font-weight-0: 400;
        --font-weight-1: 500;
        --font-weight-2: 600;
        --font-weight-3: 700;
        --font-weight-4: 800;

        /* Radius */
        --radius-0: .5rem;
        --radius-1: .25rem;
}   
`;

export default GlobalStyles;
