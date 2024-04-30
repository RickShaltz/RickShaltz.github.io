import { Button } from "./button.js";

export class Save_Button extends Button {
    constructor (x, y, width, height) {
        super(x, y, width, height, "SAVE GAME");
        this.timer;
    }

    show() {
        super.show()

        if (this.timer != null && new Date().getTime() - this.timer.getTime() > 2000) {
            this.text = "SAVE GAME"
            this.timer = null
        }
    }

    triggered(event_handler) {
        if (event_handler.minigame_manager.active_minigame != null) {
            this.text = "CANNOT SAVE DURING MINIGAME"
            this.timer = new Date()
            return;
        } else {
            event_handler.save("save_file_1");

            localStorage.setItem('game_save', JSON.stringify(save_object));
            this.text = "FILE SAVED"
            this.timer = new Date()
        }
    }
}