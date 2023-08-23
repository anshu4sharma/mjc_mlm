import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Main from "./screens/Main.js";
import { useEffect } from "react";
import Aos from "aos";
import { Toaster } from "react-hot-toast";

const Root = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return (
    <>
      <Toaster />
      <Outlet />
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Main />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
