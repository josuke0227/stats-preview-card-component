import Contents from "./components/Contents";

import theme from "./styles/theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Contents />
    </ThemeProvider>
  );
};

export default App;
