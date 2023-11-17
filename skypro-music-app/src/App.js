import { GlobalStyle } from "./globalStyle";
import { Main } from "./pages/mainFolder/main";

import { AppRoutes } from "./routes";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes>
        <Main />
      </AppRoutes>
    </>
  );
}
