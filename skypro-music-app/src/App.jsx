import { Main } from "./pages/mainFolder/main";

import { GlobalStyle } from "./pages/mainFolder/globalStyle";
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
