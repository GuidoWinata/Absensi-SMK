import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Dashadmin from '../pages/adminPages/Dashadmin';
import Mainpage from '../pages/Mainpage';
import Dashsiswa from '../pages/siswaPages/Dashsiswa';
import { Riwayat } from '../pages/siswaPages/Riwayat';
import Mainpages from '../layout/DashboardSiswa/Mainpages';
import Siswaadmin from '../pages/adminPages/Siswaadmin';
import { Izin } from '../layout/Izin/Izin';

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
    path: '/siswa',
    element: <Mainpages />,
    children: [
      { path: '', element: <Dashsiswa /> },
      { path: 'dashboard', element: <Dashsiswa /> },
      { path: 'izin', element: <Izin /> },
      { path: 'riwayat', element: <Riwayat /> }
    ],
  },
]);

export default routes;
