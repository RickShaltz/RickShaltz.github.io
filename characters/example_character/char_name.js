import { Character } from "../../character_manager/character.js"
import { Char_Name_Choices } from "./char_name_choices.js"
import { Dialogue } from "../../dialogue_classes/dialogue.js"

export class Character_Name extends Character{ // <- change Character_Name to your character's name! No spaces or special characters
    constructor(){
        super("Character Name Here!") // <- change to be your own character name. You may use spaces and special characters here.
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Char_Name_Choices() // <- replace Char_Name with your character's name, no spaces or special characters.
    }

    /** READ ME: each character is on a dialogue_path, which determines what they are saying.
     * 
     * DIALOGUE:
     * 
     * The dialogue is in chronological order. Without any parameters, one will proceed to the next.
     * Each dialogue_path must be encompassed by square brackets: [ "Example text here!" , "Second text here!" ]
     * 
     * If you wish to use a stat from cult_stats, you must refer to it in brackets within the text.
     * [ "Your name is [name]" ] <- this will replace with [name] with the corresponding stat in cult_stats.
     * 
     * To set the speaker of your dialogue, add {Speaker:char_name} to the front of your text.
     * {Speaker:} will set the speaker to no one. This can be used for narration.
     *  
     * To move from one dialogue path to the other, just add (Go) to the start of your text.
     * Example: [ "(Go)example_2_dialogue_path" ]  <- this makes the character move to dialogue path example_2_dialogue_path
     * 
     * To make a choice, add (Choice) then the name of the choice. Please consult char_name_choices.js and make sure your choice is there
     * Example: [ "(Choice)example_choice" ] 
     *
     * To end a dialogue, add (End), then the begginning of the next dialogue path for that character.
     * Example: [ "(End)last_example_dialogue_path" ]
     * 
     * IMAGES:
     * 
     * To display images, make sure to load images at the bottom of this class.
     * {name_of_image:display_location} <- this will display the desired image at the desired location
     * {Edlith:middle} <- example display
     * Possible display locations are: middle, left, right
     * Note: No spaces are allowed in this statement. Mind capitals.
     * 
     * VARIABLES:
     * If you want to change cult_stats variables, add <> at the front of your dialogue sentence.
     * If your variable is not already in cult_stats, it will create that variable. You may add any positive or negative number.
     * You may also change multiple cult_stats. (You may use add or set)
     * [ "<name_of_variable:add:value_here>Example text here!" ] or [ "<var1:add:value_here><var2:set:value_here>Example text here!" ]
     * 
     * If you want dialogue to ONLY appear when certain stats are fulfilled, then do this:
     * [ "<name_of_variable:more/less:value_here>Example text here!" ]
     * Note: choose either more or less. They are inclusive.
     */
    set_possible_dialogue(){
        this.dialogue_path = new Dialogue("intro") // make sure this is the dialogue path you want to start on
        this.possible_dialogue = {
            "intro": ["{Speaker:Edlith}{Edlith:middle}Example text here! Change me!", 
            "Wow, this is the second text box! You did it!", 
            "(Go)example_dialogue_path"],

            "example_dialogue_path": ["Second dialogue path! Let's make a choice!", 
            "Do you like eggs or ham?",
            "(Choice)example_choice"],

            "last_example_dialogue_path": ["Either way you suck!",
            "(End)end"],

            "<no_talk:is:1>end": [""], // end of interactions, this can never be reached
        }
    }

    set_possible_response(){
        this.possible_response_dialogue = []
    }

    load_images(){
        this.images["Edlith"] = loadImage('assets/images/edlith.png'); // <- upload your own image and use it here!

        // this.images["Your Character Here"] = loadImage('assets/images/char_name.png'); <- example second image

    }

    load_audio(){
        this.audio = loadSound('assets/audio/edlith_soundtrack.mp3') // <- upload your own soundtrack and use it here!
    }
}