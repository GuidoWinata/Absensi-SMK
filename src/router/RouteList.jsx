import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Dashadmin from '../pages/adminPages/Dashadmin';
import Mainpage from '../pages/Mainpage';
import Mainpages from '../layout/DashboardSiswa/Mainpages';
import Dashsiswa from '../pages/siswaPages/Dashsiswa';
import { Riwayat } from '../pages/siswaPages/Riwayat';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Mainpage />,
    children: [
      { path: '', element: <Dashadmin /> },
    ],
  },
  {
    path: '/siswa',
    element: <Mainpages />,
    children: [
      { path: '', element: <Dashsiswa /> },
      { path: 'riwayat', element: <Riwayat /> }
    ],
  },
]);

export default routes;
