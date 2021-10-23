module.exports = {
  theme: {
    screens: {
      mobile: { max: "34.375rem" },
      tablet: "34.375rem",
      laptop: "68.75rem",
      desktop: "93.75rem",
      /* coarse pointer */
      cp: { raw: "(pointer: coarse)" },
    },
    colors: {
      black: {
        light: "hsl(248, 5%, 25%)",
        normal: "hsl(248, 5%, 15%)",
        dark: "hsl(248, 5%, 10%)",
      },
      green: {
        xlight: "hsl(109, 20%, 80%)",
        light: "hsl(109, 20%, 71%)",
        normal: "hsl(109, 20%, 50%)",
        dark: "hsl(109, 50%, 20%)",
        bright: "hsl(109, 40%, 50%)",
      },
      orange: {
        xlight: "hsl(34, 90%, 90%)",
        light: "hsl(34, 100%, 85%)",
        normal: "hsl(34, 70%, 55%)",
        dark: "hsl(34, 100%, 30%)",
        xdark: "hsl(34, 100%, 20%)",
      },
    },
  },
};
