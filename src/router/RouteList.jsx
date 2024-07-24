import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Dashadmin from '../pages/adminPages/Dashadmin';
import Mainpage from '../pages/Mainpage';
import Dashsiswa from '../pages/siswaPages/Dashsiswa';
import Mainpages from '../layout/DashboardSiswa/Mainpages';
import Siswaadmin from '../pages/adminPages/Siswaadmin';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Mainpage />,
    children: [
      { path: 'dashboard', element: <Dashadmin /> },
      { path: 'siswa', element: <Siswaadmin /> },
    ],
  },
  {
    path: '/siswa/dashboard',
    element: <Mainpages />,
    children: [{ path: '', element: <Dashsiswa /> }],
  },
]);

export default routes;
