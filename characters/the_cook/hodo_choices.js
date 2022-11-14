class Hodo_Choices extends Character_Choices{ // <- Change Char_Name to your character's name
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
            case "starving_guests":
                hash = {
                    "Who are you again?" : "who_are_you",
                    "They can feast off of my god-like presence" : "eat_presence",
                    "Nonsense! We have food! It's just... not visible right now": "invisible_food"
                }
                break;
            case "what_prophecy":
                hash = {
                    "What prophecy?" : "preprophecy"
                }
                break;
            case "look_for_chef":
                hash = {
                    "What is the prophecy?!?" : "prophecy",
                    "I don't care": "do_not_care",
                }
                break;
            case "listen":
                hash = {
                    "Okay, tell me about the prophecy" : "prophecy",
                    "I genuinely could not care less": "do_not_care_2",
                }
                break;
            case "listen_2":
                hash = {
                    "Fine, fine, tell me about this prophecy, ugh" : "prophecy",
                    "(Spit in his face)": "spit_face",
                }
                break;
            case "are_you_the_one":
                hash = {
                    "No." : "not_the_one",
                    "Yes, I once cooked an egg": "yes_the_one",
                    "Wait, you came to a cult looking for a chef?": "confused_the_one",
                }
                break;

            case "cookoff":
                hash = {
                    "I accept" : "<Gold:more:15>cookoff",
                    "I am without gold": "no_cookoff",
                }
                break;
            case "lost_cookoff":
                hash = {
                    "Here (-15G)" : "lost_giving",
                    "We didn't agree to anything": "lost_not_giving",
                }
                break;   
        }
        choice_display.set_choices(hash, cult_stats)
    }
}