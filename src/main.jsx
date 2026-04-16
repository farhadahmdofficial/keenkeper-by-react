import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RoutLayout from './layout/RoutLayout';
import HomePage from './Pages/Hompages/HomePage';
import TimelinePage from './Pages/TimelinePage/TimelinePage';
import StataPage from './Pages/StatsPage/StataPage';
import FriendDetails from './Pages/Hompages/FriendDetails';
import { TimelineCt } from './Contex/TimelineC';
import TimlineContex from './Contex/TimlineContex';



const router = createBrowserRouter([
  {
    path: "/",
    element: <RoutLayout></RoutLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/timeline",
        element: <TimelinePage></TimelinePage>
      },
      {
        path: "/:id",
        element: <FriendDetails></FriendDetails>
      },
      //  {
      //   path : "/:id",
      //   element : <FriendDetails></FriendDetails>
      //  },
      {
        path: "/stats",
        element: <StataPage></StataPage>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <TimlineContex>
      <RouterProvider router={router} />,

    </TimlineContex>


  </StrictMode>,
)
