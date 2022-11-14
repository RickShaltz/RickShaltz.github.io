class Pollen extends Character{ // <- change Character_Name to your character's name! No spaces or special characters
    constructor(){
        super("Pollen") // <- change to be your own character name. You may use spaces and special characters here.
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Pollen_Choices() // <- replace Char_Name with your character's name, no spaces or special characters.
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
            "intro": ["{Speaker:???}{Pollen:middle}Huff... huff...",
            "{Speaker:}The new guest seems to be out of breath.",
            "He is sweating intensely. You can see the mounds of things he's carrying, though you can't quite make out what those things are.",
            "(Choice)talk"],

            "interrupt": [
                "{Speaker:}Before you can even speak up, the man raises his hand.",
                "{Speaker:???}Give me a moment to catch my breath. Huff.",
                "Hoooooo. Hoooo. Deep breaths. In and out.",
                "(Go)cont"
            ],

            "sweat_interrupt": [
                "{Speaker:???}Sorry- huff- about that. This stuff is really heavy to lug around.",
                "Jeez, wow. Hoooo! Give me a moment to catch my breath.",
                "(Go)cont"
            ],

            "cont": [
                "<shake:set:5><broken_floor:set:true>{Speaker:}The man drops the heavy bag of luggage on the ground, cracking the floor.",
                "<shake:set:0>(Choice)broken_floor"
            ],

            "floor_cry": [
                "{Speaker:???}Sorry about that. Here, take this as reparations.",
                "<Gold:add:1>{Speaker:}He tosses you a coin.",
                "(Go)introduce_self"
            ],

            "very_strong": [
                "<pollen_relations:add:3>{Speaker:???}Thank you, deary. Trekking up a hundred stairs with a thousand pounds of mass on your back isn't easy.",
                "(Go)introduce_self"
            ],

            "introduce_self": [
                "{Speaker:Pollen}My name is Pollen, it's nice to meet you. I'm here because I noticed the state of your living space.",
                "I don't mean to tell you how to run a cult, but you'll want this place to look better if you want to attract more people.",
                "What's up with the mood here? The atmosphere here is all gloomy and depressing! You need to liven up this place.",
                "That's where I come in. I'm an architect. Triple stars, by the way. I designed the King's bathroom myself!",
                "Here's my business card.",
                "{Speaker:}He passes you a sweat caked business card.",
                "{Speaker:Pollen}I can make this place look absolutely amazing! A space like this has so much wasted potential!",
                "The lighting here is quite bad and doesn't quite reflect properly. If you want to make your space to appear bigger, you'll need some mirrors.",
                "I can fix this place in a hot minute, for the right price.",
                "(Choice)what_services"
            ],

            "my_floor": [
                "Ah. You're still fixated on that. Don't worry, it isn't that bad. It's like modern art, you know? A spider web of cracks.",
                "In fact, you should pay me because I put that there! Consider it a gift from me.",
                "(Go)what_services"
            ],

            "what_services": [
                "Now, I offer a wide variety of services, but I'm mostly in the decoration industry. Do you want chairs? Tables? I've got it all!",
                "What do you say? Do you want to have a look at my services?",
                "(Choice)want_services"
            ],

            "my_floor_2": [
                "Look, I'm sorry okay? I dropped my bag a little too hard on the ground. I mean, at least walking over the destroyed spot will be more entertaining now.",
                "I took something boring and mundane about your living place and turned it into a fun exercise.",
                "Now, do you want to check out my services or not?",
                "(Choice)want_services_2"
            ],

            "no_thanks": [
                "That's understandable.",
                "It's not like I lugged a few metric tonnes of material up here to your cult.",
                "Whatever, it's your loss. If you ever need me, just send me a pigeon or something.",
                "(End)revisit"
            ],

            "services": [
                "Here's some things I can offer.",
                "(Choice)services"
            ],

            // SERVICES BELOW
            "fix_floor": [
                "<Gold:add:-50>Alright, I'll fix the floor!",
                "<broken_floor:set:false>There, are you happy? It's all fixed!",
                "Jeez, get off my back.",
                "(Go)services"
            ],

            "fix_floor": [
                "<Gold:add:-50>Alright, I'll fix the floor!",
                "<broken_floor:set:false>There, are you happy? It's all fixed!",
                "Jeez, get off my back.",
                "(Go)services"
            ],

            "buy_chairs": [
                "<chairs:set:true>Here are your chairs. I always found it strange that you didn't have them before.",
                "(Go)services"
            ],

            "decorate_tavern": [
                "Alright, wise choice! The tavern atmosphere often makes people feel more relaxed.",
                "<decorate:set:tavern>{Background:tavern}All done!",
                "(Go)services"
            ],

            "goodbye_pollen": [
                "Very well. Farewell then. May we meet next time.",
                "I look forward to helping you create the living space you yearn for.",
                "(End)revisit"
            ],

            "revisit": [
                "{Speaker:Pollen}{Pollen:middle}Huff... huff... man, getting here is never going to get easier, is it?",
                "I'm back to offer you my services once again.",
                "(Go)services"
            ],

            "<no_talk:is:1>end": [""], // end of interactions
        }
    }

    set_possible_response(){
        this.possible_response_dialogue = []
    }

    load_images(){
        this.images["Pollen"] = loadImage('assets/images/pollen.png'); // <- upload your own image and use it here!
        this.images["tavern"] = loadImage('assets/images/backgrounds/tavern.png'); // <- upload your own image and use it here!
        // this.images["Your Character Here"] = loadImage('assets/images/char_name.png'); <- example second image

    }

    load_audio(){
        this.audio = loadSound('assets/audio/edlith_soundtrack.mp3') // <- upload your own soundtrack and use it here!
    }
}