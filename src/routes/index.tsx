import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "../components";
import { ErrorPage } from "./404";
import { CountryRoute } from "./country";
import { Home } from "./home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='countries'>
        <Route path=':id' element={<CountryRoute />} />
      </Route>

      <Route path='*' element={<ErrorPage />} />
    </Route>
  ),
  {
    future: {
      // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
      v7_normalizeFormMethod: true,
    },
  }
);
