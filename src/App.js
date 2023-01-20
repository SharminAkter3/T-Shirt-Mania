import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import GrandPa from './Components/GrandPa/GrandPa';
import Home from './Components/Home/Home';
import Main from './Components/layouts/Main';
import Orders from './Components/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>
        },
        {
          path: '/orders',
          element: <Orders></Orders>
        },
        {
          path: '/grandpa',
          element: <GrandPa></GrandPa>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
