import fs from 'fs';

export default (filePath) => {
  try {
    return !!fs.statSync(filePath);
  } catch (err) {
    return !(err && err.code === 'ENOENT');
  }
};
