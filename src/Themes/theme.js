import { CommonColors } from "./colors";

const Elevation = (theme) => ({
  elevation1: `0 1px 3px 1px ${theme.colors.transparentBlack3},
    0 1px 2px 0 ${theme.colors.transparentBlack4}`,
  elevation2: `0 2px 6px 2px ${theme.colors.transparentBlack3},
    0 1px 2px 0 ${theme.colors.transparentBlack4}`,
  elevation3: `0 1px 3px 0 ${theme.colors.transparentBlack4},
    0 4px 8px 3px ${theme.colors.transparentBlack3}`,
  elevation4: `0 2px 3px 0 ${theme.colors.transparentBlack4},
    0 6px 10px 4px ${theme.colors.transparentBlack3}`,
  elevation5: `0 4px 4px 0 ${theme.colors.transparentBlack4},
    0 8px 12px 6px ${theme.colors.transparentBlack3}`,

  // Add more elevations here
});

export const lightTheme = {
  colors: {
    ...CommonColors,
    //background
    background: "#fffbfe",
    onBackground: "#fffbfe",

    // surface
    surface: "#fffbfe",
    onSurface: "#1c1b1f",

    //surface levels
    surface1: "#f7f2f9",
    surface2: "#f3edf7",
    surface3: "#eee8f4",
    surface4: "#ece6f3",
    surface5: "#e9e3f1",

    // surface variant and outline color
    surfaceVariant: "#fffbfe",
    onSurfaceVariant: "#49454f",
    outline: "#49454f",

    // elevation

    // primary
    primary: "#6750a4",
    onPrimary: "#fff",

    // primary container
    primaryContainer: "#eaddff",
    onPrimaryContainer: "#21005d",

    // secondary
    secondary: "#625b71",
    onSecondary: "#fff",

    // secondary container
    secondaryContainer: "#e8def8",
    onSecondaryContainer: "#1d192b",

    // tertiary
    tertiary: "#7d5260",
    onTertiary: "#fff",

    // tertiary container
    tertiaryContainer: "#ffd8e4",
    onTertiaryContainer: "#31111d",

    // error
    error: "#b3261e",
    onError: "#fff",

    // error container
    errorContainer: "#f9dedc",
    onErrorContainer: "#410e0b",
  },
};
lightTheme.elevation = Elevation(lightTheme);
export const darkTheme = {
  colors: {
    ...CommonColors,
    background: "#1c1b1f",

    primary: "rgba(208,188,255,1)",
    onPrimary: "rgba(56,30,114,1)",

    primaryContainer: "#4f378b",
    onPrimaryContainer: "#eaddff",

    secondaryContainer: "#4a4458",
    onSecondaryContainer: "#e8def8",

    onSurface: "rgba(230,225,229,1)",

    outline: "rgba(147,143,153,1)",

    error: "rgba(179,38,30,1)",
  },
};
darkTheme.elevation = Elevation(darkTheme);
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
