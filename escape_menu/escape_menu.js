import { Save_Button } from "./save_button.js";
import { Load_Button } from "./load_button.js";
import { Back_Button } from "./back_button.js";

export class Escape_Menu {
    constructor() {
        this.buttons = [];

        this.buttons.push(new Save_Button(windowWidth/2, windowHeight/2 - 80, 300, 50));
        this.buttons.push(new Load_Button(windowWidth/2, windowHeight/2, 300, 50));
        this.buttons.push(new Back_Button(windowWidth/2, windowHeight/2 + 80, 300, 50));
        
    }

    show() {
        for (var i in this.buttons) {
            this.buttons[i].show();
        }
    }

    trigger_click(event_handler) {
        for (var i in this.buttons) {
            this.buttons[i].check_if_clicked(event_handler)
        }
    }


}