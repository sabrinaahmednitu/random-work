import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import Page404 from "../Shared/Page404/Page404";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Page404></Page404>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
      ],
    },
  ]);