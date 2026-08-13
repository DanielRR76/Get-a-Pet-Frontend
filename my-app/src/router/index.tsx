import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router";
import { ROUTES } from "./routes";

export function Router({ children }: { children?: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export function Routes() {
  return (
    <ReactRoutes>
      {Object.values(ROUTES).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </ReactRoutes>
  );
}
