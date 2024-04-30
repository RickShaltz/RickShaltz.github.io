import { Character_Choices } from "../../character_manager/character_choices.js";

export class Death_Choices extends Character_Choices{
    constructor(){
        super()
    }

    initiate_choice(choice, possible_dialogue, text_box, choice_display, cult_stats){
        var hash;
        switch(choice){
        }
        choice_display.set_choices(hash, cult_stats)
    }
}