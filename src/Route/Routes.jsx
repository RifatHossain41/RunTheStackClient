import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Home from "../Pages/Home/Home/Home";
import Question from "../Pages/Shared/Question/Question";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/question",
        element: <Question></Question>,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);