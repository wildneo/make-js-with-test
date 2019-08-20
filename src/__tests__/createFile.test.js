import fs from 'fs';
import os from 'os';
import path from 'path';
import createFile from '../createFile';
import { alreadyExists, successfully } from '../messages';

describe('create file', () => {
  const data = 'example';
  const fileName = 'test';
  const tmpDir = fs.mkdtempSync(`${os.tmpdir()}/`);
  const filePath = path.join(tmpDir, fileName);

  test('create new file', (done) => {
    createFile(filePath, data, (err, msg) => {
      if (err) {
        done.fail(err);
        return;
      }
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(msg).toBe(`${successfully} ${filePath}`);
      expect(content).toEqual(data);
      done();
    });
  });

  test('file already exists', (done) => {
    fs.writeFileSync(filePath, data, 'utf-8');

    createFile(filePath, data, (err, msg) => {
      if (err) {
        done.fail(err);
        return;
      }
      const content = fs.readFileSync(filePath, 'utf-8');
      expect(msg).toBe(`${alreadyExists} ${filePath}`);
      expect(content).toEqual(data);
      done();
    });
  });
});
