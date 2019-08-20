import fs from 'fs';
import os from 'os';
import path from 'path';
import isExist from '../utils/isExist';

describe('read file', () => {
  const filename = 'test';
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);
  const filePath = path.join(tmpDir, filename);

  fs.writeFileSync(filePath, '', 'utf-8');

  test('#exist file', () => {
    expect(isExist(filePath)).toBeTruthy();
  });

  test('#exist dir', () => {
    expect(isExist(tmpDir)).toBeTruthy();
  });

  test('#non-exist', () => {
    expect(isExist('/unknown')).toBeFalsy();
  });
});
