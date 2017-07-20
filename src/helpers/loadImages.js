/**
 * try to load file if it fails create img file
 * @param  {array} arrayOfIcons
 * @return {object}
 */
module.exports = function myTypeIcons(arrayOfIcons) {
  const obj = {};
  try {
    for (let i = arrayOfIcons.length - 1; i >= 0; i -= 1) {
      obj[arrayOfIcons[i].name] = ScriptUI.newImage(arrayOfIcons[i].src);
    }
  } catch (err) {
    const ScriptFolder = new Folder(`${Folder.userData.fsName}/${ScriptName}/`);
    ScriptFolder.create();
    let f;
    for (let i = arrayOfIcons.length - 1; i >= 0; i -= 1) {
      f = new File(`${ScriptFolder.fsName}/${arrayOfIcons[i].name}.png`);
      f.encoding = 'BINARY';
      f.open('w');
      f.write(arrayOfIcons[i].src);
      f.close();
      obj[arrayOfIcons[i].name] = ScriptUI.newImage(f);
      f.remove();
    }
    f = 0;
  }

  arrayOfIcons = 0;
  return obj;
};
