import { NodeColor } from "./NodeColor.js";

export default class RBTNode {
    constructor(data, parent = null) {
        this.data = data;
        this.parent = parent;
        this.left = null;
        this.right = null;
        this.color = NodeColor.RED;
    }
}