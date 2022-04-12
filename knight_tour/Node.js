export default class Node {
  constructor(x, y) {
    this.x = x; 
    this.y = y
    this.direction =  0;
  }

  getX() {
    return this.x;
  }

  setX(x) {
    this.x = x;
  }

  getY() {
    return this.y;
  }

  setY(y) {
    this.y = y;
  }

  getDirection() {
    return this.direction;
  }

  setDirection(dir) {
    this.direction = dir;
  }
}
