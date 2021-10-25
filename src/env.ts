import { join } from 'path';
import { homedir } from 'os';

const TOOL_NAME = 'gcc-arm-none-eabi-9';
const TOOL_VERSION = '2020-q2-update';

export const TOOL_HOME = join(homedir(), '.listenai', TOOL_NAME, TOOL_VERSION);
