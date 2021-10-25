import * as download from 'download';
import { constants } from 'fs';
import { access, writeFile, rm } from 'fs/promises';
import { join } from 'path';
import { platform } from 'os';
import { TOOL_HOME } from '../env';

const PREFIX = 'https://cdn.iflyos.cn/public/gcc-arm-none-eabi/';

const SUFFIX = (() => {
  switch (platform()) {
    case 'win32': return 'win32';
    case 'darwin': return 'mac';
    default: return 'x86_64-linux';
  }
})();

const NAME = `gcc-arm-none-eabi-9-2020-q2-update-${SUFFIX}.zip`;

const STAMP_FILE = join(TOOL_HOME, '.install');

(async () => {

  try {
    await access(STAMP_FILE, constants.F_OK);
    return;
  } catch (e) {
  }

  try {
    await access(TOOL_HOME, constants.F_OK);
    await rm(TOOL_HOME, { recursive: true });
  } catch (e) {
  }

  await download(`${PREFIX}${NAME}`, TOOL_HOME, {
    extract: true,
  });

  await writeFile(STAMP_FILE, '');

})();
