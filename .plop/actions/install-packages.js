const { spawn } = require('child_process');

function installPackages(_, config) {
  return new Promise((resolve, reject) => {
    const process = spawn('pnpm', ['install'], {
      cwd: config.path,
      shell: true,
      stdio: 'inherit',
    });

    process.on('close', (code) => {
      console.log(code);
      `${code}` === '0'
        ? resolve('Installed packages.')
        : reject(`Failed to install packages. Exited with ${code}.`);
    });
  });
}

module.exports = function (plop) {
  plop.setDefaultInclude({ actionTypes: true });
  plop.setActionType('installPackages', installPackages);
};
