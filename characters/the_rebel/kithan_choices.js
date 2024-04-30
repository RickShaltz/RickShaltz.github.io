import { Character_Choices } from "../../character_manager/character_choices.js";

export class Kithan_Choices extends Character_Choices{ // <- Change Char_Name to your character's name
    constructor(){
        super()
    }

    /**
     * These choices may be initiated by the char_name function.
     * hash will contain all choices for that choice situation.
     * 
     * You can make only certain options available by doing the same thing like in normal dialogue
     * [ "Example text here!", [ [ "name_of_variable", "more/less", number_here ] ] ]
     */
    initiate_choice(choice, possible_dialogue, text_box, choice_display, cult_stats){
        var hash;
        switch(choice){
            case "vampire_encounter":
                hash = {
                    "Hi there! Welcome to [name]!" : "greet",
                    "Run away" : "run_away",
                    "Hide behind a chair": "<chairs:is:true>hide_behind_chair",
                    "Give him the good old one-two combo": "fight"
                }
                break;
            case "vampire_lunge":
                hash = {
                    "Let's be civilized about this. You're a man of reason, right?" : "civilized",
                    "Give him the good old one-two combo": "fight",
                    "Close your eyes":"close_eyes",
                    "Dodge": "dodge"
                }
                break;
            case "who_are_you":
                hash = {
                    "I am a high demon overlord, you shall bow before me!": "i_am_demon",
                    "I am just a regular Joe.": "i_am_joe",
                    "Die, you fiend! (Kick him)": "kick_him"
                }
                break;
            case "question_him":
                hash = {
                    "Who are you?": "ask_name",
                    "TELL ME YOUR NAME, PUNY HUMAN!": "ask_name_aggressive"
                }
                break;
            case "ask_kithan":
                hash = {
                    "You were a blood sucking monster just now - explain that!": "explain_yourself",
                    "It's nice to meet you": "nice_to_meet_you",
                    "Die, you fiend(Kick him)": "kick_him_extra"
                }
                break;
            case "kidnapper":
                hash = {
                    "Yeah, I kidnapped you": "yes_kidnapped",
                    "No, I did not kidnap you": "no_kidnapped",
                }
                break;
            case "denial":
                hash = {
                    "Oh my bad, I must have gotten you mixed up with someone else": "yes_mixup",
                    "You tried to maul me just now! I know what I saw!": "no_mixup",
                }
                break;
        }
        choice_display.set_choices(hash, cult_stats)
    }
}