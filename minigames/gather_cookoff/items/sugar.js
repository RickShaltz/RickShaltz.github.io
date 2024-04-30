import { Item } from "./item.js"

export class Sugar extends Item {
    constructor(x, y, speed){
        super("Sugar", x, y, 60, 80, speed, loadImage("assets/images/cooking_images/sugar.png"))
    }
}