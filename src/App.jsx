import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Country } from './pages/Country';
import {AppLayout} from "./components/Layout/AppLayout";
import { ErrorPage } from "./components/UI/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";
import { PlanetDetails } from "./components/Layout/PlanetDetails";


const router = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    errorElement: <ErrorPage/>,


    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path:"about",
        element: <About/>,
      },
      {
        path: "about/:id", // Add dynamic route for planet details
        element: <PlanetDetails />,
      },
      {
        path:"country",
        element: <Country/>,
      },
      {
        path:"country/:id",
        element: <CountryDetails/>,
      },
      {
        path:"contact",
        element: <Contact/>,
      }
    ]

  }
  
  
]);

const App = () => {
 
  return (
   
      <RouterProvider router={router}></RouterProvider>
    
  )
}
export default App
