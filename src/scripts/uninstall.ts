import { rm } from 'fs/promises';
import { TOOL_HOME } from '../env';

(async () => {

  try {
    await rm(TOOL_HOME, { recursive: true });
  } catch (e) {
  }

})();
