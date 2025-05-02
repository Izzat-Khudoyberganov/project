import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={routes}/>;
  // npm i react-router-dom
  // npm i axios
}

export default App;
