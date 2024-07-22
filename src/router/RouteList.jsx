import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Dashadmin from '../pages/Dashadmin';
import Mainpage from '../pages/Mainpage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin/dashboard',
    element: <Mainpage />,
    children: [{ path: '', element: <Dashadmin /> }],
  },
]);

export default routes;
