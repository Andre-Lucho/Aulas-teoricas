export const theme = {
  colors: {
    background: '#d4d4d4',
    color: '#10161e',
    backgroundDark: '#10161e',
    colorDark: '#d4d4d4',
    primary: '#9b1010',
    border: '#10161e',
    borderDark: '#f2f2f2',
    cardBackground: '#f2f2f2',
    cardBackgroundDark: '#10161e',
  },
  fonts: {
    main: "'Open Sans', 'Helvetica Neue', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell",
    title: "Georgia, 'Times New Roman', Times, serif",
  },
  radius: '0.5rem',
  spacing: {
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
  },
};

export const GlobalStyle = `
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  section,
  h1,
  h2,
  div,
  p,
  a,
  li,
  ul,
  button {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: ${theme.colors.background};
    color: ${theme.colors.color};
    font-size: 1.2rem;
    font-family: ${theme.fonts.main};
    display: grid;
    grid-template:
      'navbar' 100px
      'product-grid' 1fr
      'footer' 150px
      / 100%;
  }

  body.dark-theme {
    background-color: ${theme.colors.backgroundDark};
    color: ${theme.colors.colorDark};
  }

  h1,
  h2 {
    font-family: ${theme.fonts.title};
  }

  a {
    text-decoration: none;
    color: #eee;
  }

  li {
    list-style: none;
  }

  img {
    max-height: 300px;
    max-width: 300px;
  }
`;