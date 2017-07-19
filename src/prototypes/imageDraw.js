// image resize prototype
module.exports = () => { // written by Marc Autret
  // "this" is the container; "this.image" is the graphic if( !this.image ) return;
  var WH = this.size,
  wh = this.image.size,
  k = Math.min(WH[0]/wh[0], WH[1]/wh[1]), xy;
  // Resize proportionally:
  wh = [k*wh[0],k*wh[1]];
  // Center:
  xy = [(WH[0]-wh[0])/2, (WH[1]-wh[1])/2];
  this.graphics.drawImage(this.image, xy[0], xy[1], wh[0], wh[1]);
  WH=wh=xy=null;
};
