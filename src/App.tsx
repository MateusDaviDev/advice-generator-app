import { GlobalStyle } from "./styles/global"
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Card } from "./components/Card";

export function App() {

  return (
    <div className="flex">
    <ThemeProvider theme={defaultTheme}>
      <Card/>
    <GlobalStyle/>
    </ThemeProvider>
    </div>
  )
}

