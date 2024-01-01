import { createGlobalStyle } from "styled-components";

export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

export const { xxxs, xxs, xs, sm, md, _2md, lg, xl, xxl, _4xl } = {
    xxxs: "@media (max-width: 20rem)", // 320px
    xxs: "@media (max-width: 32rem)", // 512px
    xs: "@media (max-width: 38rem)", // 608px
    sm: "@media (max-width: 48rem)", // 768px
    md: "@media (max-width: 62rem)", // 992px
    _2md: "@media (max-width: 64rem)", // 1024px
    lg: "@media (max-width: 80rem)", // 1280px
    xl: "@media (max-width: 90rem)", // 1440px
    xxl: "@media (max-width: 120rem)", // 1920px
    _4xl: "@media (max-width: 160rem)", // 2560px
};

export const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    *::placeholder {
      color: #C5C5C5 !important;
    }
    body {
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont,
                system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
                "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol", sans-serif;
        overscroll-behavior: auto;
        user-select: none;
        /* transition: background 0.2s ease-in, color 0.2s ease-in; */
    }
    a {
      text-decoration: none;
    }
    ul {
      list-style: none;
    }
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      color: inherit;
    }
    p {
      margin: 0;
      padding: 0;
    }
    /** 스크롤바 커스텀 */
    ::-webkit-scrollbar {
        width: 2px;
        height: 10px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(34, 45, 50, 0.5);
    }
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(34, 45, 50, 1);
    }
`;
