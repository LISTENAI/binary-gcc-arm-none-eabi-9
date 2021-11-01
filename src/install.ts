import download from 'download';
import { rm } from 'fs/promises';
import decompress from '@xingrz/decompress';
import { HOME } from './index';

const PACKAGE = 'gcc-arm-none-eabi-9';
const VERSION = '2020-q2-update';

const NAME = `${PACKAGE}-${VERSION}-${process.platform}_${process.arch}.tar.zst`;

const URL = `https://cdn.iflyos.cn/public/lisa-binary/${PACKAGE}/${NAME}`;

(async () => {

  try {
    await rm(HOME, { recursive: true });
  } catch (e) {
  }

  const archive = await download(URL);
  await decompress(archive, HOME);

})();
