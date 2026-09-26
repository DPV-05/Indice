function Star () {
  this.x = 0;
  this.y = 0;
  this.rotation = 0;
  this.scaleX = 1;
  this.scaleY = 1;
  this.star = new Image();
  this.star.src= "Images/Estrella.png";
}

Star.prototype.draw = function (context) {
  context.save();
  context.translate(this.x, this.y);
  context.rotate(this.rotation);
  context.scale(this.scaleX, this.scaleY);
  context.drawImage(this.star, -this.star.width/2, -this.star.height/2, this.star.width, this.star.height);
  context.restore();
};
