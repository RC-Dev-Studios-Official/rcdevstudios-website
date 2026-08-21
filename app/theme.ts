export const rcDevTheme = {
  light: {
    background: "#FFFFFF",
    foreground: "#11131A",

    surface: "#F8F9FC",
    card: "#FFFFFF",
    border: "#E7E9F0",

    textPrimary: "#11131A",
    textSecondary: "#667085",
    textMuted: "#98A2B3",

    primary: "#FF167A",
    secondary: "#7B2CFF",
    accent: "#08B9F7",

    gradient:
      "linear-gradient(135deg, #FF1744 0%, #FF1493 30%, #7B2CFF 55%, #087CFF 78%, #08B9F7 100%)",
  },

  dark: {
    background: "#050816",
    foreground: "#FFFFFF",

    surface: "#0B1020",
    card: "#10172A",
    border: "#202A40",

    textPrimary: "#FFFFFF",
    textSecondary: "#A7B0C3",
    textMuted: "#69758D",

    primary: "#FF167A",
    secondary: "#8B3DFF",
    accent: "#08B9F7",

    gradient:
      "linear-gradient(135deg, #FF167A 0%, #9B2CFF 45%, #087CFF 75%, #08B9F7 100%)",
  },
};

export const rcDevStyles = {
  button: {
    background: rcDevTheme.light.gradient,
    color: "#FFFFFF",
    borderRadius: "12px",
  },

  card: {
    background: rcDevTheme.light.card,
    border: `1px solid ${rcDevTheme.light.border}`,
    borderRadius: "20px",
  },

  heading: {
    color: rcDevTheme.light.textPrimary,
  },

  paragraph: {
    color: rcDevTheme.light.textSecondary,
  },
};

export const rcDevGradient = {
  background:
    "linear-gradient(135deg, #FF1744 0%, #FF1493 30%, #7B2CFF 55%, #087CFF 78%, #08B9F7 100%)",
};

export default rcDevTheme;
