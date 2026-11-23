import XLSX from 'xlsx';
import path from 'path';

export function readExcel() {
  const filePath = path.join(process.cwd(), 'test-data', 'LoginData2.xlsx');
  const workbook = XLSX.readFile(filePath);
  const worksheet = workbook.Sheets['Sheet1'];
  return XLSX.utils.sheet_to_json(worksheet);
}