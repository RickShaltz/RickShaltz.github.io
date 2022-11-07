class Ryklee_Choices extends Character_Choices{ // <- Change Char_Name to your character's name
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
            case "are_you_lost":
                hash = {
                    "Are you lost?" : "are_you_lost",
                    "AH! What are you doing in my den?" : "who_are_you",
                    "How are you wearing that armour? It's nearly 30 degrees outside.": "hot_outside"
                }
                break;
            case "ask_ryklee_1":
                hash = {
                    "Who are you?" : "ryklee_looking",
                }
                break;
            case "awkward_hunter":
                hash = {
                    "D-d-d-d-demon hunter? (Sweat nervously)" : "awkward_nervous",
                    "You mean demon helper, right? Right?": "awkward_confused",
                    "Demon? Oh, there are no demons around here! None at all!": "awkward_denial",
                    "I'm a demon though.": "awkward_idiot"
                }
                break;
            case "allowed_to_sit":
                hash = {
                    "Get the hell out." : "get_hell_out",
                    "Go ahead, take a seat": "take_seat"
                }
                break;
            case "furniture":
                hash = {
                    "No" : "no_furniture"
                }
                break;
            case "tea":
                hash = {
                    "No" : "no_tea"
                }
                break;
            case "guest":
                hash = {
                    "I can offer you a knuckle sandwhich" : "knuckle_sandwhich",
                    "I can offer you my heart": "heart",
                    "I can offer you this rock I found on the ground": "rock_on_ground"
                }
                break;
            case "can_visit":
                hash = {
                    "Absolutely not." : "no_visit",
                    "Sure, come by any time!": "yes_visit"
                }
                break;
        }
        choice_display.set_choices(hash, cult_stats)
    }
}