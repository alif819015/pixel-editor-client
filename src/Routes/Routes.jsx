import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/SideMenu/HomePage/HomePage";
import ThisDevice from "../Pages/SideMenu/ThisDevice/ThisDevice";
import DropBox from "../Pages/SideMenu/DropBox/DropBox";
import OneDrive from "../Pages/SideMenu/OneDrive/OneDrive";
import GoogleDrive from "../Pages/SideMenu/GoogleDrive/GoogleDrive";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <HomePage></HomePage>
      },
      {
        path: "/device",
        element: <ThisDevice></ThisDevice>
      },
      {
        path: "/dropbox",
        element: <DropBox></DropBox>
      },
      {
        path: "/oneDrive",
        element: <OneDrive></OneDrive>
      },
      {
        path: "/googleDrive",
        element: <GoogleDrive></GoogleDrive>
      },
    ]
  },
  
]);

export default router;
