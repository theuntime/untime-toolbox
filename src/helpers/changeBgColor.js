module.exports = function changeBGcolor(button, color) {
  button.graphics.backgroundColor =
    button.graphics.newBrush(button.graphics.BrushType.SOLID_COLOR, color);
};
