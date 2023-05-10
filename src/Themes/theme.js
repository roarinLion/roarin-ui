export const lightTheme = {
  colors: {
    background: "#fff",
    onPrimary: "rgba(255,255,255,1)",
    onSecondaryContainer: "rgba(29,25,43,1)",
    surfacesSurface1: "rgba(255,251,254,1)",
    onSurface: "rgba(28,27,31,1)",
    outline: "rgba(121,116,126,1)",
    primary: "rgba(103,80,164,1)",
  },
};

export const darkTheme = {
  colors: {
    background: "#1f1f1f",
    onPrimary: "rgba(56,30,114,1)",
    onSecondaryContainer: "rgba(232,222,248,1)",
    onSurface: "rgba(230,225,229,1)",
    outline: "rgba(147,143,153,1)",
    primary: "rgba(208,188,255,1)",
    secondaryContainer: "rgba(74,68,88,1)",
  },
};

export const theme = {
  fontSizes: {
    // Heading font sizes
    h1: "2.5rem",
    h2: "2rem",
    h3: "1.75rem",
    h4: "1.5rem",
    h5: "1.25rem",
    h6: "1rem",
    // Other font sizes
    p: "1rem",
    text: "1rem",
    blockquote: "1.25rem",
    code: "0.875rem",
  },
  fonts: {
    labelLarge: {
      family: "Roboto, sans-serif",
      size: "14px",
      weight: "500",
      lineHeight: "20px",
    },
  },
  lineHeights: {
    heading: "1.2",
  },
  letterSpacing: {
    tight: "-0.05rem",
    normal: "0",
  },
  fontFamily: {
    primary: "Roboto, sans-serif",
  },
  fontWeight: {
    normal: 500,
    bold: 600,
  },
  textAlign: {
    left: "left",
    center: "center",
    right: "right",
    justify: "justify",
  },
  headings: {
    default: {
      fontSize: "1rem",
      color: "#333",
      lineHeight: "1.2",
      letterSpacing: "0",
      fontFamily: "Roboto, sans-serif",
      fontWeight: 500,
      textAlign: "left",
      m: 0,
    },
    h1: {
      fontSize: "2.5rem",
      letterSpacing: "-0.05rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.75rem",
    },
    h4: {
      fontSize: "1.5rem",
    },
    h5: {
      fontSize: "1.25rem",
    },
    h6: {
      fontSize: "1rem",
    },
  },
  maxWidth: "1200px",
  space: {
    xs: "0.5rem",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "2.5rem",
  },
  breakpoints: ["768px", "1024px", "1200px"],
};
