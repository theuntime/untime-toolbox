// CHECKS FOR USER OS
const getOS = () => {
  const op = $.os;
  const match = op.indexOf('Windows');
  if (match !== (-1)) return 'PC'; // User is on PC
  return 'MAC';
};

const getUrlLaunchCode = () => {
  if (getOS() === 'MAC') return 'Open';
  return 'Start';
};

// ONCLICK FUNCTION FOR YOUR URL BUTTON CONTROL
// urlLaunchCode = Open or Start / ' ' = keeps a space character separator / 'http://myurl.com' = Defines the actual URL path
module.exports = url => system.callSystem(`${getUrlLaunchCode()} ${url}`);
