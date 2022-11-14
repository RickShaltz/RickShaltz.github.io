class Hodo extends Character { // <- change Character_Name to your character's name! No spaces or special characters
    constructor(){
        super("Hodo") // <- change to be your own character name. You may use spaces and special characters here.
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Hodo_Choices() // <- replace Char_Name with your character's name, no spaces or special characters.
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
            "intro": ["{Speaker:???}{Hodo:middle}Ah, it appears I have arrived. I must say the directions on your posters are not very clear.",
            "{Speaker:}He sniffs the air.", "{Speaker:???}Why do I not smell anything?", 
            "<advertisement_strategy:is:secret_cookies>Where are the promised cookies?",
            "Where is the scent of food? Don't tell me... you don't have any food?",
            "That is simply unacceptable! Your guests will all be starving!",
            "(Choice)starving_guests"],

            "who_are_you": [
                "{Speaker:Hodo}My name is Hodo, a legendary chef! I will gather the Seven spices and create the ultimate dish that will transcend the mortal plain!",
                "I will bask in the glory of a thousand filled stomachs, all singing in joy for the meal I have given them!",
                "I will make a meal so delicious it will nourish with just a single whiff!",
                "That is who I am. I have travelled the land looking for a chef that could match my expertise.",
                "I am looking for someone who can fulfill my prophecy!",
                "(Choice)look_for_chef"
            ],

            "eat_presence": [
                "God-like presence? Don't tell me... are you the one from the prophecy?",
                "(Choice)what_prophecy"
            ],

            "invisible_food": [
                "Invisible food? Only a highly trained chef could produce such a mythic meal!",
                "Don't tell me... are you the one from the prophecy?",
                "(Choice)what_prophecy"
            ],

            "preprophecy": [
                "To understand the prophecy, you must understand who I am, for I am not simply a commoner.",
                "(Go)who_are_you"
            ],

            "do_not_care": [
                "No, maybe not right now, but you should! This is of the utmost importance!",
                "Listen to me, stranger, and you may find enlightenment in my words.",
                "(Choice)listen"
            ],

            "do_not_care_2": [
                "How could you treat a guest with such disrespect? You spit in the face of my life's journey!",
                "(Choice)listen_2"
            ],

            "spit_face": [
                "I cannot believe you right now! And here I thought you were the chef destined to rival me. Clearly I was wrong!",
                "No chef could be so rude and intolerant as you! I shall tell everyone of your dishonorable acts today.",
                "<Popularity:add:-7>Goodbye!",
                "{Speaker:}He walks out.",
                "(End)end"
            ],

            "prophecy": [
                "Long ago, there was a young man who was worth nothing to the world around him. He wasn't strong enough to fight. He wasn't smart enough to learn.",
                "He was self aware of his worthlessness, so one day, he decided that the world didn't need him anymore.",
                "He went down to the lake to drown himself in his sorrows. That way, the air he breathed would go to another living creature worth more than he.",
                "There, on the shoreline, the lonely man found a single spatula stuck in the sand.",
                "When he picked that spatula up... he was given a prophecy. A purpose to fulfill.",
                "He was told to travel the world, collecting the ingredients for a perfect dish. Though, he could not complete this dish by himself.",
                "Along his journey, he was to meet someone he would consider his rival, enemy, and equal. A great chef from whom he would learn much from.",
                "With his rival, the young man was destined to create something beyond the human imagination.",
                "That was 10 years ago.",
                "Now that young man stands before you.",
                "{Speaker:}{Hodo:left}{Spatula:right}Hodo pulls out a golden spatula!",
                "{Speaker:Hodo}{Spatula:fade_out}{Hodo:middle}Are you the chef I am looking for?",
                "(Choice)are_you_the_one"
            ],

            "no_the_one": [
                "But that is exactly what someone who is the one would say!",
                "(Go)challenge_to_cookoff"
            ],

            "yes_the_one": [
                "I knew it! I could sense it from the energy you were giving off!",
                "(Go)challenge_to_cookoff"
            ],

            "confused_the_one": [
                "This is a cult? I thought it was a restuarant.",
                "Whatever the case is, I'm sure you're the one. I sense it from your energy!",
                "(Go)challenge_to_cookoff"
            ],

            "challenge_to_cookoff": [
                "I, Hodo, accept you as my rival!",
                "Now, my dear rival, I challenge you to a cookoff! The loser will have to pay up 15 gold.",
                "(Choice)cookoff"
            ],

            "no_cookoff": [
                "Not feeling it today? Very well! There is no honour in striking down an opponent who is not at their best.",
                "I shall return another day to challenge you once again!",
                "(End)returned_for_duel"
            ],

            "returned_for_duel": [
                "{Speaker:Hodo}{Hodo:middle}I, Hodo, have returned!",
                "Rival, you haven't forgotten about our cookoff, have you?",
                "Are you ready for a showdown!? The loser will have to pay up 15 gold.",
                "(Choice)cookoff"
            ],

            "cookoff": [
                "<chef:add:1>Good! Now, prepare to gather your ingredients!",
                "The recipe for the cookies will appear at the bottom. Simply catch the ingredients with your bowl and place them in the hearth.",
                "Best of luck. Do not disappoint me, rival.",
                "(Initiate:gather_cookoff_easy)(Go)after_cookoff"
            ],

            "after_cookoff": [
                "<cook_off_score:more:5>(Go)win_cookoff",
                "<cook_off_score:less:4>(Go)lose_cookoff"
            ],

            "win_cookoff": [
                "And that concludes our cookoff! How many cookies did you manage to make? I managed to make 4.",
                "[cook_off_score] cookies?",
                "You may have bested me this time, but I'll get you next time! I'll train until I'm worthy to be called your rival.",
                "<Gold:add:15>As agreed, I'll pay you 15 gold pieces.",
                "Until we meet again, rival! You will rue the day you underestimated Hodo!",
                "(End)end"
            ],

            "lose_cookoff": [
                "And that concludes our cookoff! How many cookies did you manage to make? I managed to make 5.",
                "[cook_off_score] cookies?",
                "Ha. It appears I've bested you this time. It was a fair and honourable match, but your skills were just a little below mine.",
                "As agreed, please hand over the 15 gold pieces.",
                "(Choice)lost_cookoff"
            ],

            "lost_giving": [
                "<Gold:add:-15>Thank you for honoring our deal.",
                "Train hard, my dear rival. The next time I come by, I expect your skills to have doubled tenfold!",
                "Farewell!",
                "(End)returned_for_duel"
            ],

            "lost_not_giving": [
                "<hodo_relations:add:-10>You... are not honorable. You have besmirched our duel!",
                "I'll remember this.",
                "I warn you, dear rival, change your wicked ways. They will not get you far in life.",
                "<hodo_relations:more:-20>I will begone now. Until we meet again.",
                "<hodo_relations:more:-20>(End)returned_for_duel",
                "<hodo_relations:less:-21>I do not wish to see your dishonorable being again. Goodbye.",
                "(End)end"
            ],
            // remember to add a do not give

            "<no_talk:is:1>end": [""],
        }
    }

    set_possible_response(){
        this.possible_response_dialogue = []
    }

    load_images(){
        this.images["Hodo"] = loadImage('assets/images/hodo.png'); // <- upload your own image and use it here!
        this.images["Spatula"] = loadImage('assets/images/golden_spatula.png');

        // this.images["Your Character Here"] = loadImage('assets/images/char_name.png'); <- example second image

    }

    load_audio(){
        this.audio = loadSound('assets/audio/hodo_soundtrack.webm') // <- upload your own soundtrack and use it here!
    }
}