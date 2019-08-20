import path from 'path';
import createFile from './createFile';
import getPathParts from './utils/getPathParts';
import { noFileName } from './messages';
import print from './utils/printer';

export default (filePath, testDir) => {
  if (!filePath) {
    print(null, noFileName);
    return;
  }
  const splitPath = getPathParts(filePath);
  const fileName = splitPath.pop();
  const fileDir = path.join(...splitPath);
  const newTestDir = testDir || `${fileDir}/__tests__`;

  const fileData = 'export default (param...) => {\n  // Do something...\n};\n';
  const testData = `import ${fileName} from '../${fileName}';\n`;

  createFile(`${fileDir}/${fileName}.js`, fileData, print);
  createFile(`${newTestDir}/${fileName}.test.js`, testData, print);
};
