import React from 'react'
import TableRiwayat from '../../layout/RiwayatSiswa/TableRiwayat';
import Layout from '../../layout/RiwayatSiswa/Layout';
import { TanggalProvider } from '../../layout/RiwayatSiswa/TanggalPIlih';

export const Riwayat = () => {
  return (
    <TanggalProvider>
      <Layout />
    </TanggalProvider>
    )
}
