import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Dashadmin from '../pages/adminPages/Dashadmin';
import Mainpage from '../pages/Mainpage';
import Mainpages from '../layout/DashboardSiswa/Mainpages';
import Dashsiswa from '../pages/siswaPages/Dashsiswa';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin/dashboard',
    element: <Mainpage />,
    children: [
      { path: '', element: <Dashadmin /> },
    ],
  },
  {
    path: '/siswa/dashboard',
    element: <Mainpages />,
    children: [
      { path: '', element: <Dashsiswa /> },
    ],
  },
]);

export default routes;
