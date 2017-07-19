module.exports = function changeFGcolor(button, color) {
  button.graphics.foregroundColor =
    button.graphics.newPen(button.graphics.PenType.SOLID_COLOR, color, 1);
};
