import fs from 'fs';
import isExist from './utils/isExist';
import { alreadyExists, successfully } from './messages';

export default (filePath, data, cb) => {
  if (isExist(filePath)) {
    cb(null, `${alreadyExists} ${filePath}`);
    return;
  }
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, `${successfully} ${filePath}`);
  });
};
