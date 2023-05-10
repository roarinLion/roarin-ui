const CommonColors = {
  black: "rgba(0,0,0,1)",
  errorError10: "rgba(65,14,11,1)",
  error20: "rgba(96,20,16,1)",
  error30: "rgba(140,29,24,1)",
  error50: "rgba(220,54,46,1)",
  error60: "rgba(228,105,98,1)",
  error70: "rgba(236,146,142,1)",
  error80: "rgba(242,184,181,1)",
  error90: "rgba(249,222,220,1)",
  error95: "rgba(252,238,238,1)",
  error99: "rgba(255,251,249,1)",
  neutral20: "rgba(49,48,51,1)",
  neutral30: "rgba(72,70,73,1)",
  neutral40: "rgba(96,93,98,1)",
  neutral50: "rgba(120,117,121,1)",
  neutral60: "rgba(147,144,148,1)",
  neutral70: "rgba(174,170,174,1)",
  neutral80: "rgba(201,197,202,1)",
  neutral95: "rgba(244,239,244,1)",
  neutralVariant10: "rgba(29,26,34,1)",
  neutralVariant20: "rgba(50,47,55,1)",
  neutralVariant30: "rgba(73,69,79,1)",
  neutralVariant40: "rgba(96,93,102,1)",
  neutralVariant70: "rgba(174,169,180,1)",
  neutralVariant80: "rgba(202,196,208,1)",
  neutralVariant90: "rgba(231,224,236,1)",
  neutralVariant95: "rgba(245,238,250,1)",
  primary10: "rgba(33,0,93,1)",
  primary30: "rgba(79,55,139,1)",
  primary50: "rgba(127,103,190,1)",
  primary60: "rgba(154,130,219,1)",
  primary70: "rgba(182,157,248,1)",
  primary95: "rgba(246,237,255,1)",
  secondary20: "rgba(51,45,65,1)",
  secondary40: "rgba(98,91,113,1)",
  secondary50: "rgba(122,114,137,1)",
  secondary60: "rgba(149,141,165,1)",
  secondary70: "rgba(176,167,192,1)",
  secondary80: "rgba(204,194,220,1)",
  tertiary10: "rgba(49,17,29,1)",
  tertiary20: "rgba(73,37,50,1)",
  tertiary30: "rgba(99,59,72,1)",
  tertiary50: "rgba(152,105,119,1)",
  tertiary60: "rgba(181,131,146,1)",
  tertiary70: "rgba(210,157,172,1)",
  tertiary80: "rgba(239,184,200,1)",
  tertiary90: "rgba(255,216,228,1)",
  tertiary95: "rgba(255,236,241,1)",
  tertiary99: "rgba(255,251,250,1)",
  sourceTertiary: "rgba(125,82,96,1)",
  transparentBlack: "rgba(31,31,31,0.12)",
  transparentBlack2: "rgba(0,0,0,0.25)",
  transparentBlack3: "rgba(0,0,0,0.15)",
  transparentBlack4: "rgba(0,0,0,0.3)",
  transparentBlack5: "rgba(29,25,43,0.08)",
  transparentBlack6: "rgba(29,25,43,0.12)",
  transparentGainsboro: "rgba(227,227,227,0.12)",
  transparentLavender: "rgba(232,222,248,0.08)",
  transparentLavender2: "rgba(232,222,248,0.12)",
  transparentSlateBlue: "rgba(103,80,164,0.12)",
  transparentSlateBlue2: "rgba(103,80,164,0.08)",
  transparentSlateBlue3: "rgba(103,80,164,0.05)",
  transparentSlateBlue4: "rgba(103,80,164,0.11)",
  transparentSlateBlue5: "rgba(103,80,164,0.14)",
  transparentThistle: "rgba(208,188,255,0.12)",
  transparentThistle2: "rgba(208,188,255,0.08)",
  transparentThistle3: "rgba(208,188,255,0.05)",
  transparentThistle4: "rgba(208,188,255,0.11)",
  transparentThistle5: "rgba(208,188,255,0.14)",
  transparentWhite: "rgba(255,255,255,0.12)",
  transparentWhite2: "rgba(255,255,255,0.08)",
};

export const lightTheme = {
  colors: {
    ...CommonColors,
    background: "#fffbfe",
    primary: "#6750a4",
    onPrimary: "#fff",

    primaryContainer: "#eaddff",
    onPrimaryContainer: "#21005d",

    secondaryContainer: "#e8def8",
    onSecondaryContainer: "#1d192b",

    surface1: "rgba(255,251,254,1)",
    onSurface: "rgba(28,27,31,1)",

    outline: "rgba(121,116,126,1)",
    error: "rgba(179,38,30,1)",
  },
};

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
