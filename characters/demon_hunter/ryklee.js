class Ryklee extends Character{ // <- change Character_Name to your character's name! No spaces or special characters
    constructor(){
        super("Ryklee") // <- change to be your own character name. You may use spaces and special characters here.
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Ryklee_Choices() // <- replace Char_Name with your character's name, no spaces or special characters.
    }

    /** READ ME: each character is on a dialogue_path, which determines what they are saying.
     * 
     * DIALOGUE:
     * 
     * The dialogue is in chronological order. Without any parameters, one will proceed to the next.
     * 
     * Each new dialogue must be encompassed by square brackets: [ "Example text here!" , "Second text here!" ]
     * 
     * If you wish to use a stat from cult_stats, you must refer to it in brackets within the text.
     * [ "Your name is [name]" ] <- this will replace with [name] with the corresponding stat in cult_stats.
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
            "intro": ["{Speaker:}{Ryklee:middle}A woman in heavy armour stumbles into your cult!",
            "{Speaker:???}Oh! It seems I've finally arrived. Hmm. This can't be right. No, this definitely isn't right.",
            "(Choice)are_you_lost"],

            "are_you_lost": [
                "Oh, I didn't notice you there!",
                "Me? Lost? No, I couldn't be lost! I never get lost, don't be silly.",
                "It's not like I accidentally left the trail I was following and fell down a ditch!",
                "HAHAHAHA!",
                "{Speaker:}She looks down at the map she's holding. You notice that she's holding it upside down.",
                "{Speaker:???}(Go)introduce_ryklee"
            ],

            "who_are_you": [
                "Oh! Sorry, I didn't notice you there!",
                "Did you say you lived here? Sorry, I assumed this place to be too sad for residence.",
                "No offense, but I've seen homeless people with better living situations than this!",
                "Now, where was I? Right. The map.",
                "(Go)introduce_ryklee"
            ],

            "hot_outside": [
                "Oh, I didn't notice you!",
                "It... it is quite irritating wearing the armour, yes. But it'll protect you from all sorts of dangers!",
                "On the way here, I was attacked by a tree that jumped into my vision! If I wasn't wearing this armour, I would've been skewered!",
                "Now, where was I? Right. The map.",
                "(Go)introduce_ryklee"
            ],

            "introduce_ryklee": [
                "{Speaker:}She fidgets with her map, twisting and turning it.",
                "{Speaker:???}Hmm... No, this definitely isn't the right place! Did I miss a turn somewhere?",
                "(Choice)ask_ryklee_1"
            ],

            "ryklee_looking": [
                "{Speaker:Ryklee}Oh, how impolite of me! My name is Ryklee, Ryklee the Demon Hunter!",
                "(Choice)awkward_hunter"
            ],

            "awkward_nervous": [
                "Yeah, I hunt demons. Why are you shaking? Are you alright? You seem to be sweating a river!",
                "Do you require medical aid? I'm sorry, but the extent of my training is pressing a piece of paper against the wound!",
                "Hmm, usually when I'm sweating, I just take a bath in holy water. Maybe the same would work for you?",
                "{Speaker:}You shake your head violently.",
                "{Speaker:Ryklee}Suit yourself.",
                "(Go)introduce_self"
            ],

            "awkward_confused": [
                "No, I am a demon hunter. I track them down and destroy them. I burn their essence until they are nothing but ash, which I scatter to the winds.",
                "Then, I celebrate by making a campfire on top of their grave. I eat smores afterwards. It's quite nice, really."
                , "(Go)introduce_self"
            ],

            "awkward_denial": [
                "Really? I've heard reports that a demon was around these parts.",
                "Are you sure you haven't seen one? They can appear perfectly human. Hell, you could even be a demon!",
                "Hahaha!"
                , "(Go)introduce_self"
            ],

            "awkward_idiot": [
                "Hahaha! That's a good joke!",
                "No demon would have weak arms like those! No offense, but a strong gust of wind would probably knock you over."
                , "(Go)introduce_self"
            ],

            "introduce_self": [
                "Say, all that demon hunting has really made me exhausted. Do you mind if I sit down for a while before continuing on my way?",
                "(Choice)allowed_to_sit"
            ],

            "get_hell_out": [
                "Sure, I can get the hell out of this place! I don't really sense much hell around here, but a few drops of holy water aught to get the hell out.",
                "{Speaker:}Ryklee pulls out a bottle of holy water and tries to spray it.",
                "You quickly snatch the bottle out of her hand.",
                "{Speaker:Ryklee}Oh, you want to do it yourself? Go ahead.",
                "(Go)take_seat"
            ],

            "take_seat": [
                "I'll just take a seat... somewhere. Huh. Do you... have a chair or something?", // if there is furniture, change
                "(Choice)furniture"
            ],

            "no_furniture": [
                "No? Well then.",
                "...",
                "I'm thirsty. Do you have any tea?",
                "(Choice)tea"
            ],

            "no_tea": [
                "No? Hmf. You really don't have anything to offer a guest like me?",
                "(Choice)guest"
            ],

            "yes_cookies": [
                "<ryklee_relations:add:3>Cookies?",
                "{Speaker:}She nibbles on the cookies, quickly devouring one of them.",
                "Thanks, that was rather nice.",
                "Do you have any other surprises to offer me?",
                "(Choice)guest"
            ],

            "knuckle_sandwhich": [
                "Thanks for the offer but no thanks, I'm not hungry right now.",
                "(Go)ryklee_end_1"
            ],

            "heart": [
                "Hmm... I don't really like eating hearts. They taste kinda funny. If you cook them wrong, they just explode since the tissue is very sensitive.",
                "<ryklee_heart:add:1>Thank you for the offer, but I'll have to decline.",
                "(Go)ryklee_end_1"
            ],
            
            "rock_on_ground": [
                "Is... is that a gift for me?",
                "{Speaker:}You nod your head.",
                "<ryklee_relations:add:5>{Speaker:Ryklee}Wow! Nobody's ever given me a gift! Thank you so much!",
                "{Speaker:}Ryklee jumps up in down in happiness as she pockets the rock.",
                "{Speaker:Ryklee}(Go)ryklee_end_1"
            ],

            "ryklee_end_1": [
                "Hoo! I feel all rested up now. Thank you for taking me as a guest. Say, can I visit again sometime?",
                "(Choice)can_visit"
            ],

            "no_visit": [
                "<ryklee_relations:add:-5>Oh.",
                "Hey, look... I'm sorry if I disturbed you. I just... don't talk to people that often.",
                "I only meet demons and... they're usually dead by the end of our interaction.",
                "Sorry about that. I won't bother you again.",
                "(End)end"
            ],

            "yes_visit": [
                "<ryklee_relations:add:5>Really?",
                "Well, I'll make sure to take you up on that offer!",
                "If you need any demons slayed, just call me up!",
                "See you soon!",
                "(End)end"
            ],

            "<no_talk:is:1>end": [""], // end of interactions
        }
    }

    set_possible_response(){
        this.possible_response_dialogue = []
    }

    load_images(){
        this.images["Ryklee"] = loadImage('assets/images/ryklee.png'); // <- upload your own image and use it here!

        // this.images["Your Character Here"] = loadImage('assets/images/char_name.png'); <- example second image
    }

    load_audio(){
        this.audio = loadSound('assets/audio/ryklee_soundtrack.mp3') // <- upload your own soundtrack and use it here!
    }
}