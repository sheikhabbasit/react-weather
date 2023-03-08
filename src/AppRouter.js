import { createTheme, ThemeProvider } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { paths } from "./routes/paths";
import { defaultTheme } from "themes/defaultTheme";

function App() {
  const currentTheme = createTheme(defaultTheme);
  return (
    <ThemeProvider theme={currentTheme}>
      <Routes>
        {paths.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
