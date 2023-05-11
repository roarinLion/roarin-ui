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
    //background
    background: "#1c1b1f",
    onBackground: "#e6e1e5",

    // surface
    surface: "#1c1b1f",
    onSurface: "#e6e1e5",

    //surface levels
    surface1: "#25232a",
    surface2: "#2b2831",
    surface3: "#302d38",
    surface4: "#322f3a",
    surface5: "#35313f",

    // surface variant and outline color
    surfaceVariant: "#49454f",
    onSurfaceVariant: "#cac4d0",
    outline: "#938f99",

    // primary
    primary: "#d0bcff",
    onPrimary: "#381e72",

    // primary container
    primaryContainer: "#4f378b",
    onPrimaryContainer: "#eaddff",

    // secondary
    secondary: "#ccc2dc",
    onSecondary: "#332d41",

    // secondary container
    secondaryContainer: "#4a4458",
    onSecondaryContainer: "#e8def8",

    // tertiary
    tertiary: "#efb8c8",
    onTertiary: "#492532",

    // tertiary container
    tertiaryContainer: "#633b48",
    onTertiaryContainer: "#ffd8e4",

    // error
    error: "#f2b8b5",
    onError: "#601410",

    // error container
    errorContainer: "#8c1d18",
    onErrorContainer: "#410e0b",
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
    inter12Regular: {
      family: "Inter",
      size: "12px",
      weight: "400",
      lineHeight: "normal",
    },
    displayLarge: {
      family: "Roboto, sans-serif",
      size: "57px",
      weight: "400",
      lineHeight: "64px",
    },
    displayMedium: {
      family: "Roboto",
      size: "45px",
      weight: "400",
      lineHeight: "52px",
    },
    displaySmall: {
      family: "Roboto",
      size: "36px",
      weight: "400",
      lineHeight: "44px",
    },
    labelLarge: {
      family: "Roboto, sans-serif",
      size: "14px",
      weight: "500",
      lineHeight: "20px",
    },
    roboto16Medium: {
      family: "Roboto, sans-serif",
      size: "16px",
      weight: "500",
      lineHeight: "24px",
    },
    roboto18Regular: {
      family: "Roboto, sans-serif",
      size: "18px",
      weight: "400",
      lineHeight: "24px",
    },
    roboto18RegularLine28: {
      family: "Roboto, sans-serif",
      size: "18px",
      weight: "400",
      lineHeight: "28px",
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
