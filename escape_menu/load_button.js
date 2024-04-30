import { Dialogue } from "../dialogue_classes/dialogue.js";
import { Text_Box } from "../dialogue_classes/text_box.js";
import { Button } from "./button.js";
import { Image_Manager } from "../images_manager/image_manager.js"

export class Load_Button extends Button {
    constructor (x, y, width, height) {
        super(x, y, width, height, "LOAD GAME");
        this.timer;
    }

    show() {
        super.show()

        if (this.timer != null && new Date().getTime() - this.timer.getTime() > 2000) {
            this.text = "LOAD GAME"
            this.timer = null
        }
    }

    triggered(event_handler) {
        if (event_handler.minigame_manager.active_minigame != null) {
            this.text = "CANNOT LOAD DURING MINIGAME"
            this.timer = new Date()
            return;
        } else {
            var retrieved = JSON.parse(localStorage.getItem('game_save'))

            if (retrieved == null) {
                this.text = "NO PREVIOUS SAVES"
                this.timer = new Date()
                return;
            } else {
                event_handler.load('save_file_1')

                this.text = "LOADED"
                this.timer = new Date()
            }   
        }
    }
}