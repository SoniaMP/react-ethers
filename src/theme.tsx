import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          textTransform: "none",
        },
      },
    },
  },
});
