import { createTheme } from "@mui/material";

export const Color = {
  primary: {
    100: "#e7dbfe",
    200: "#cfb7fd",
    300: "#b692fb",
    400: "#9e6efa",
    500: "#864af9",
    600: "#6b3bc7",
    700: "#502c95",
    800: "#361e64",
    900: "#1b0f32",
  },
  secondary: {
    100: "#fefade",
    200: "#fcf5bd",
    300: "#fbef9b",
    400: "#f9ea7a",
    500: "#f8e559",
    600: "#c6b747",
    700: "#958935",
    800: "#635c24",
    900: "#322e12",
  },
  brown: {
    100: "#d8d6e7",
    200: "#b1aecf",
    300: "#8985b6",
    400: "#625d9e",
    500: "#3b3486",
    600: "#2f2a6b",
    700: "#231f50",
    800: "#181536",
    900: "#0c0a1b",
  },
  red: {
    100: "#f9d3d3",
    200: "#f4a7a7",
    300: "#ef7b7b",
    400: "#ea4f4f",
    500: "#e52323",
    600: "#b41b1b",
    700: "#822020",
    800: "#511616",
    900: "#200b0b",
  },
  blue: {
    100: "#d3e9f9",
    200: "#a7d3f4",
    300: "#7bbdef",
    400: "#4fa7ea",
    500: "#238fe5",
    600: "#1b6db4",
    700: "#155b82",
    800: "#0f3a51",
    900: "#092820",
  },
  green: {
    100: "#d3f9d3",
    200: "#a7f4a7",
    300: "#7bef7b",
    400: "#4fea4f",
    500: "#23e523",
    600: "#1bb41b",
    700: "#208220",
    800: "#165116",
    900: "#0b200b",
  },
  text_grey: "#666666",
  bg_white: "#F0F0F0",
  black: "#000000",
};

export const theme = createTheme({
  palette: {
    primary: {
      100: Color.primary[100],
      200: Color.primary[200],
      300: Color.primary[300],
      400: Color.primary[400],
      main: Color.primary[500],
      600: Color.primary[600],
      700: Color.primary[700],
      800: Color.primary[800],
      900: Color.primary[900],
    },
    secondary: {
      100: Color.secondary[100],
      200: Color.secondary[200],
      300: Color.secondary[300],
      400: Color.secondary[400],
      main: Color.secondary[500],
      600: Color.secondary[600],
      700: Color.secondary[700],
      800: Color.secondary[800],
      900: Color.secondary[900],
    },
    brown: {
      100: Color.brown[100],
      200: Color.brown[200],
      300: Color.brown[300],
      400: Color.brown[400],
      main: Color.brown[500],
      600: Color.brown[600],
      700: Color.brown[700],
      800: Color.brown[800],
      900: Color.brown[900],
    },
    red: {
      100: Color.red[100],
      200: Color.red[200],
      300: Color.red[300],
      400: Color.red[400],
      main: Color.red[500],
      600: Color.red[600],
      700: Color.red[700],
      800: Color.red[800],
      900: Color.red[900],
    },
    blue: {
      100: Color.blue[100],
      200: Color.blue[200],
      300: Color.blue[300],
      400: Color.blue[400],
      main: Color.blue[500],
      600: Color.blue[600],
      700: Color.blue[700],
      800: Color.blue[800],
      900: Color.blue[900],
    },
    green: {
      100: Color.green[100],
      200: Color.green[200],
      300: Color.green[300],
      400: Color.green[400],
      main: Color.green[500],
      600: Color.green[600],
      700: Color.green[700],
      800: Color.green[800],
      900: Color.green[900],
    },
    bg_white: Color.white,
    text_grey: Color.text_grey,
  },
  typography: {
    body1: {
      fontFamily: "Poppins",
    },
    body1_grey: {
      fontFamily: "Poppins",
      color: Color.text_grey,
    },
    body2_grey: {
      fontFamily: "Poppins",
      color: Color.text_grey,
      fontSize: "13px",
    },
    body2: {
      fontFamily: "Roboto",
    },
    h2_title: {
      fontFamily: "Ubuntu Sans Mono",
      fontSize: "50px",
      fontWeight: 600,
    },
    h3_title: {
      fontFamily: "Ubuntu Sans Mono",
      fontSize: "30px",
      fontWeight: 500,
      color: Color.brown[500],
    },
    h4_title: {
      fontFamily: "Roboto",
      fontSize: "16px",
      fontWeight: 500,
    },
    ListItemText: {
      fontFamily: "Poppins",
    },
  },
});
