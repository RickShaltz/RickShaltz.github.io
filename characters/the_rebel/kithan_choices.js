class Kithan_Choices extends Character_Choices{ // <- Change Char_Name to your character's name
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
            case "kill_you_here":
                hash = {
                    "Yes, they most certainly would" : "would_join",
                    "No, they would never" : "never_join",
                    "Are you threatening me?": "threaten_join"
                }
                break;
            case "special":
                hash = {
                    "There is nothing special about me" : "not_special",
                    "I am a demon from the abyss" : "abyss_special",
                    "I can wiggle my ears": "ears_special",
                    "I'm a chef": "<chef:more:1>cook_special"
                }
                break;

            case "are_you_ancient":
                hash = {
                    "I am a demon, that's why I have old ears" : "abyss_special",
                    "I am a really old human. My back hurts, etc" : "back_hurts"
                }
                break;

            case "demon_powers":
                hash = {
                    "Magic!" : "fake_magic",
                    "I can do a backflip (Do a backflip)" : "backflip",
                    "My magic is not meant to be witnessed by mortals such as you": "no_show_magic"
                }
                break;
            case "doing_magic":
                hash = {
                    "Magic" : "doing_magic"
                }
                break;
            case "listen_secret":
                hash = {
                    "I'm listening. Go ahead." : "listen_secret",
                    "Is the secret that you have bad fashion sense?": "bad_fashion"
                }
                break;
            case "hug":
                hash = {
                    "(Hug him)" : "hug",
                    "I'm sorry": "sorry",
                    "Leave this place before I report you to the King": "report_threat"
                }
                break;    
        }
        choice_display.set_choices(hash, cult_stats)
    }
}