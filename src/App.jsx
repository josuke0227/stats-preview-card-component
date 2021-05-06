import Contents from "./components/Contents";

import theme from "./styles/theme";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Contents />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
