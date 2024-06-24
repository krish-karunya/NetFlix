import React from "react";
import Login from "./Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Browser from "./Browser";
import Vedio from "./Vedio";
import Error from "./Error";

function Body() {
  return (
    <div>
      <RouterProvider router={appRouter} />;
    </div>
  );
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/browser",
    element: <Browser />,
  },
  {
    path: "/vedio/:movieId",
    element: <Vedio />,
  },
]);

export default Body;
