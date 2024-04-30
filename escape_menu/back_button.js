import { Button } from "./button.js";

export class Back_Button extends Button {
    constructor (x, y, width, height) {
        super(x, y, width, height, "BACK");
    }

    triggered(event_handler) {
        event_handler.display.menu_open = false
    }
}