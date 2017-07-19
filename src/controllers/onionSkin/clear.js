// remove onion skin
module.exports = (l) => {
  const k = l.name.split(' - ');
  if (k[0] === 'OnionSkin') {
    l.locked = false;
    l.remove();
  }
};
