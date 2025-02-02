import { FavContextProvider } from "./context/cartContext"
import { AppRoutes } from "./routes/Routes";

export function App() {
  return (
    <div>
      <FavContextProvider>
        <AppRoutes></AppRoutes>
      </FavContextProvider>
    </div>
  );
}
