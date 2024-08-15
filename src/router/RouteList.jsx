import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashadmin from "../pages/adminPages/Dashadmin";
import Mainpage from "../pages/Mainpage";
import Dashsiswa from "../pages/siswaPages/Dashsiswa";
import { Riwayat } from "../pages/siswaPages/Riwayat";
import Mainpages from "../layout/DashboardSiswa/Mainpages";
import Absensimin from "../pages/adminPages/Absensimin";
import Siswaadmin from "../pages/adminPages/Siswaadmin";
import SiswaGuardSkin from "../Skins/SiswaGuardSkin";
import AdminGuardSkin from "../Skins/AdminGuardSkin";
import GuestSkin from "../Skins/GuestSkin";
import Izin from "../layout/Izin/Izin";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <GuestSkin />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminGuardSkin />,
    children: [
      { path: "", element: <Dashadmin /> },
      { path: "dashboard", element: <Dashadmin /> },
      { path: "siswa", element: <Siswaadmin /> },
      { path: "absensi", element: <Absensimin /> },
    ],
  },
  {
    path: "/siswa",
    element: <SiswaGuardSkin />,
    children: [
      { path: "", element: <Dashsiswa /> },
      { path: "dashboard", element: <Dashsiswa /> },
      { path: "riwayat", element: <Riwayat /> },
      { path: "izin", element: <Izin /> },
    ],
  },
]);

export default routes;
