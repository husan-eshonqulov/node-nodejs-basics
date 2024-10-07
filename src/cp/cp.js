import { fork } from 'node:child_process';
import path from 'node:path';

const childPath = path.resolve('.', 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const child = fork(childPath, args);
  child.on('message', (message) => {
    console.log(`Received from child:`, message);
  });

  child.on('error', (error) => {
    console.error(`Error from child process:`, error);
  });

  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });
};

spawnChildProcess([1, 2, 3]);
