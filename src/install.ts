import * as download from 'download';
import { rm } from 'fs/promises';
import { platform } from 'os';
import { TOOL_HOME } from './env';

const PREFIX = 'https://cdn.iflyos.cn/public/gcc-arm-none-eabi/';

const SUFFIX = (() => {
  switch (platform()) {
    case 'win32': return 'win32';
    case 'darwin': return 'mac';
    default: return 'x86_64-linux';
  }
})();

const NAME = `gcc-arm-none-eabi-9-2020-q2-update-${SUFFIX}.zip`;

(async () => {

  try {
    await rm(TOOL_HOME, { recursive: true });
  } catch (e) {
  }

  await download(`${PREFIX}${NAME}`, TOOL_HOME, {
    extract: true,
  });

})();
