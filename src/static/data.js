function createData(nama, tanggal, keterangan, hadir, pulang) {
  return { nama, tanggal, keterangan, hadir, pulang };
}

const rows = [
  createData('GUIDO WINATA PUTRA', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('JEAN SAMUEL PUTRA', '12 Agustus 2024', 'Alpha', 'Tdk Absen', 'Tdk Absen'),
  createData('FERREN DIOVALDA', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('DIMAS ANDREYAWAN', '12 Agustus 2024', 'Hadir', '06.45', '15.00'),
  createData('JULIAN TRIS PRATAMA', '12 Agustus 2024', 'Telat', '10.30', '15.00'),
  createData('ALAMANUEL RUI PASKA', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('FAJAR RAMADHAN', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('DENNY NURYANTO', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('ALTHAF AKMALUL ZUHAIR', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('MOCHAMMED SULTHAN AZ-ZACHRIE', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('DONI SAPUTRA', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('MIKO NUR WALUYO', '12 Agustus 2024', 'Telat', '07.30', '15.00'),
  createData('Paskah', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
  createData('Paskah', '12 Agustus 2024', 'Telat', '07.30', '15.00'),
  createData('Paskah', '12 Agustus 2024', 'Alpha', 'Tdk Absen', 'Tdk Absen'),
  createData('Dodo', '12 Agustus 2024', 'Hadir', '06.30', '15.00'),
];

export default rows;
