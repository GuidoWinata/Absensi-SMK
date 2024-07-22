function createData(nama, tanggal, keterangan, hadir, pulang) {
  return { nama, tanggal, keterangan, hadir, pulang };
}

const rows = [
  createData('Guido', '12 Ags 2024', 'Hadir', '06.30', '15.00'),
  createData('Jean', '12 Ags 2024', 'Alpha', 'Tdk Absen', 'Tdk Absen'),
  createData('Ferren', '12 Ags 2024', 'Hadir', '06.30', '15.00'),
  createData('Dimas', '12 Ags 2024', 'Hadir', '06.45', '15.00'),
  createData('Julian', '12 Ags 2024', 'Telat', '10.30', '15.00'),
];

export default rows;
