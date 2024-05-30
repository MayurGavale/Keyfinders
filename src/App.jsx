import Navbar from './components/navbar/Navbar'
import ListPage from './routes/listPage/listPage'
import HomePage from './routes/homePage/homePage'
import ProfilePage from './routes/profilePage/profilePage'
import Login from './routes/login/login'
import Register from './routes/register/register'
import {
  createBrowserRouter,
  RouterProvider,
  
} from 'react-router-dom'

import Layout from './routes/layout/layout'
import SinglePage from './routes/singlepage/singlePage'
function App () {
  
     const router = createBrowserRouter([
      {
        path:"/",
        element:<Layout />,
        children: [
          {
            path:"/",
            element: <HomePage />
          },
          {
          path:"/list",
          element:<ListPage />
          },
          {
          path:"/:id",
          element: <SinglePage />
        },
        {
          path:"/profile",
          element:<ProfilePage />
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
        ]
      },
      
     ])


    // <div className='layout'>
    //   <div className="navbar">
    //     <Navbar />
    //   </div>
    //   <div className="content">
    //     <HomePage />
    //   </div>
    // </div>
    return (
    <RouterProvider router={router} />
    );
  }

  export default App;