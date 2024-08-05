import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

function App(): React.ReactElement {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <div className="underline">Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
