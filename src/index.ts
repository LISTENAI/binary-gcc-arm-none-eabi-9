import { join } from 'path';
import { promisify } from 'util';
import { execFile as _execFile } from 'child_process';
import { Binary } from '@binary/type';

const HOME = join(__dirname, '..', 'binary');
const execFile = promisify(_execFile);

export default <Binary>{
  homeDir: HOME,

  binaryDir: join(HOME, 'bin'),

  env: {},

  async version() {
    const { stdout } = await execFile(join(this.binaryDir, 'arm-none-eabi-gcc'), ['--version']);
    return stdout.split('\n')[0].trim();
  }
};
