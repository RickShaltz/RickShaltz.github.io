import { Death_Choices } from "./death_choices.js"
import { Character } from "../../character_manager/character.js"
import { Dialogue } from "../../dialogue_classes/dialogue.js"

export class Death extends Character{
    constructor(){
        super("Death")
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Death_Choices()
    }

    set_possible_dialogue(){
        this.dialogue_path = new Dialogue("dead")
        this.possible_dialogue = {
            "dead": ["{Speaker:}You have died.", "Retry?", "(Load_Autosave)dead"]
        }
    }

    load_images(){
    }

    load_audio(){
    }
}