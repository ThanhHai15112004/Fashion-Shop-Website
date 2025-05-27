import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/homePage/Home';
import Products from '../pages/products/Products';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
       { index: true, element: <Home /> },
       { path: 'products', element: <Products /> }
    ],
  },
]);

export { router };
