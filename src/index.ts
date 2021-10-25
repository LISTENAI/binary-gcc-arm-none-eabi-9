import { join } from 'path';
import { promisify } from 'util';
import { execFile as _execFile } from 'child_process';
import { TOOL_HOME } from './env';

const execFile = promisify(_execFile);

export const PATH = join(TOOL_HOME, 'bin');

export async function version(): Promise<string> {
  const { stdout } = await execFile(join(PATH, 'arm-none-eabi-gcc'), ['--version']);
  return stdout.split('\n')[0].trim();
}
