/**
 * try to load file if it fails create img file
 * @param  {array} arrayOfIcons
 * @return {object}
 */
module.exports = function myTypeIcons(img) {
  let newImg;
  try {
    newImg = ScriptUI.newImage(img);
  } catch (err) {
    const ScriptFolder = new Folder(`${Folder.userData.fsName}/${ScriptName}/`);
    ScriptFolder.create();
    let f;
    f = new File(`${ScriptFolder.fsName}/test.png`);
    f.encoding = 'BINARY';
    f.open('w');
    f.write(img);
    f.close();
    newImg = ScriptUI.newImage(f);
    f.remove();
    f = 0;
  }

  return newImg;
};
