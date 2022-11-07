class Char_Name_Choices extends Character_Choices{ // <- Change Char_Name to your character's name
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
            case "example_choice":
                hash = {
                    "Eggs" : "last_example_dialogue_path",
                    "Ham" : "last_example_dialogue_path"
                }
                break;
            case "example_choice_2":
                hash = {
                    "choice_1" : "example_dialogue_path1",
                    "choice_2" : "example_dialogue_path2"
                }
                break;
        }
        choice_display.set_choices(hash, cult_stats)
    }
}