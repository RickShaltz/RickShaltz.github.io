import { Character_Choices } from "../../character_manager/character_choices.js";

export class Pollen_Choices extends Character_Choices{ // <- Change Char_Name to your character's name
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
            case "talk":
                hash = {
                    "Do you need some help?" : "interrupt",
                    "Are you alright?" : "interrupt",
                    "You are sweating all over my floor!": "sweat_interrupt"
                }
                break;
            case "broken_floor":
                hash = {
                    "MY FLOOR!" : "floor_cry",
                    "Wow, you have very strong thighs" : "very_strong",
                }
                break;
            case "what_services":
                hash = {
                    "What services do you offer?" : "what_services",
                    "MY FLOOR!" : "my_floor",
                }
                break;
            case "want_services":
                hash = {
                    "Sure" : "services",
                    "No thanks" : "no_thanks",
                    "MY FLOOR!": "<broken_floor:is:true>my_floor_2"
                }
                break;
            case "want_services_2":
                hash = {
                    "Sure" : "services",
                    "No thanks" : "no_thanks"
                }
                break;

            case "services":
                hash = {
                    "Fix the floor (-20G)" : "<broken_floor:is:true><Gold:more:20>fix_floor",
                    "Build some chairs (-20G)" : "<chairs:not:true><Gold:more:20>buy_chairs",
                    "Decorate this place like a tavern (-90G)": "<Gold:more:90><decorate:not:tavern>decorate_tavern",
                    //"Decorate this place like a dungeon (-70G)": "<Gold:more:70><decorate:not:dungeon>decorate_dungeon",
                    //"Decorate this place like a library (-90G)": "<Gold:more:90><decorate:not:library>decorate_library",
                    "That's all I wanted to buy": "goodbye_pollen"
                }
                break;
        }
        choice_display.set_choices(hash, cult_stats)
    }
}