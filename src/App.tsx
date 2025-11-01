import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";

const theme = createTheme({
  palette: {
    mode: "light", // Cambia a 'dark' si quieres tema oscuro
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}>
        <Button variant="contained" color="primary">
          Hola desde MUI 🚀
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
