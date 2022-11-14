class Kithan extends Character{ // <- change Character_Name to your character's name! No spaces or special characters
    constructor(){
        super("Kithan") // <- change to be your own character name. You may use spaces and special characters here.
        this.set_possible_dialogue()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Kithan_Choices() // <- replace Char_Name with your character's name, no spaces or special characters.
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
            "intro": ["{Speaker:???}{Kithan:middle}Good morning, my fellow proletariot. I have heard news of this cult you are starting and I wish to participate.", 
            "{Speaker:Kithan}M'name is Kithan Thrihold. I believe we can become very good friends.",
            "You know, I actually dislike the idea of cults. Hundreds of followers gathered under a single, highly charismatic figure.",
            "It isn't a very good leadership system, as once the leader dies, there'll be no one left to replace him.",
            "Often after one generation, the cult dies off- unless someone takes their place.",
            "Say, if I killed you right here, do you reckon your followers will join me?",
            "(Choice)kill_you_here"], // <- since there is currently no more for this character, put up a loop.
            
            "would_join": [
                "Ha, you don't have a lot of faith in your followers, do you?",
                "<kithan_relations:add:-5>You have to be strong. You have to believe in your followers. If you want to be a successful leader, that is.",
                "(Go)kithan_cont_1"
            ],

            "never_join": [
                "<kithan_relations:add:5>Good! That's what I like to hear!",
                "A strong leader must have faith in their followers. Maybe you'll be a good person to follow after all.",
                "(Go)kithan_cont_1"
            ],

            "threaten_join": [
                "No, I have no ill intentions. Unless you're too weak, of course. It's only natural for a shark to devour those who he sees as prey.",
                "(Go)kithan_cont_1"
            ],

            "kithan_cont_1": [
                "Every cult leader has something special about them. Tell me, what is special about you?",
                "(Choice)special"
            ],

            "not_special": [
                "<kithan_relations:add:-5>Not special? My friend, every word we exchange is about giving and taking. You are trying to convince me to join your cult, are you not?",
                "When you look at yourself, do you feel disgusted? Do you feel inadequate? That is what your answer makes me think.",
                "Everyone is special, whether they like it or not. You just don't have the confidence within yourself to tell me what makes you special.",
                "(Go)me_special"
            ],

            "abyss_special": [
                "You are a demon? That indeed is special! I could never have expected this!",
                "Prove to me your worth, demon. Show me your powers.",
                "(Choice)demon_powers"
            ],

            "fake_magic": [
                "{Speaker:}You shout 'magic' as you wave your hands around.",
                "Kithan looks at you with a puzzled face.",
                "{Speaker:Kithan}What are you doing?",
                "(Choice)doing_magic"
            ],

            "doing_magic": [
                "Impressive. I'm not too entirely sure what you did since I'm no magic user myself.",
                "Whatever it was, it must've been special.",
                "(Go)me_special"
            ],

            "backflip": [
                "I didn't know backflips were unique to demons, but after seeing you preform that backflip so vigorously, I believe you.",
                "That really does make you special.",
                "(Go)me_special"
            ],

            "no_show_magic": [
                "<kithan_relations:add:-5>Ah, that's rather disappointing. You are just another fraud, like the rest of them.",
                "I don't know what I expected from a cult leader such as you. All talk, no substance, as usual.",
                "You decieve your followers with lies, hoping that in the end, they'll choose to help you instead of themselves, is that it?",
                "You are the worst kind of selfish evil, but I suppose that makes you even a little bit special.",
                "(Go)me_special"
            ],

            "ears_special": [
                "Really now? That is quite the interesting recessive gene you have there. Humans haven't had that for nearly three decades now.",
                "Are you perhaps some old human that simply looks rather young? Or are you something else entirely?",
                "Are you something ancient?",
                "(Choice)are_you_ancient"
            ],

            "back_hurts": [
                "Ah, you look a lot younger than you are.",
                "Of course, I would empathize with your back pain if I could.",
                "But I cannot.",
                "(Go)me_special"
            ],

            "cook_special": [
                "You cook? That is a strange combination of occupations, I must say.",
                "But it does certainly make you special in that sense.",
                "(Go)me_special"
            ],

            "me_special": [
                "But, do you know why I am special?",
                "I'm not so sure myself, really. I've spent a few years searching for that little key within myself.",
                "Can I let you in on a little secret?",
                "(Choice)listen_secret"
            ],

            "bad_fashion": [
                "So you are humourous. Good. Good. Just make sure you don't joke around with the wrong sort of people.",
                "Some individuals aren't so nice to those who run their mouths.",
                "{Speaker:}Kithan gives you a nice smile.",
                "{Speaker:Kithan}(Go)listen_secret"
            ],

            "listen_secret": [
                "I used to work for a rebellion. They called themselves the Eye of the Righteous. It was a bad name, I know.",
                "They claimed that they were fighting for the proletariots, fighting to free the poor from the dreaded grasp of the King.",
                "But really, I didn't care for their cause nor their goals. The proletariots will always be enslaved no matter who's ruling.",
                "It's simply a fact of life: there'll always be someone at the bottom of the pyramid.",
                "All I wanted to do was to investigate humanity.",
                "You see, each human always puts up a mask of sorts. They refuse to take this mask off no matter who they're talking to.",
                "Their friends, their enemies, their family- they will never see this human's true face. This mask is a shield that they use to keep themselves safe.",
                "This mask can change and shift, but it can never be removed, not even by the human themselves.",
                "The only time it is taken off is the moment right before their death.",
                "And so, that is what I investigate.",
                "Everyone, just as they are about to die, will reveal their true selves, even if only for a moment.",
                "I find this very curious.",
                "While working in the rebellion, I watched hundreds of people experience their last moments. I have witnessed their true selves.",
                "Humanity is ugly in its heart.",
                "Eventually, that rebellion failed and the King had everyone executed.",
                "Everyone. But. Me.",
                "(Choice)hug" 
            ],

            "hug": [
                "Back off. What are you trying to do?",
                "{Speaker:}You hug him anyways.",
                "<kithan_relations:add:10>{Speaker:Kithan}...",
                "That was different. I felt that.",
                "I didn't think I could feel something like that. Not after...",
                "...",
                "(Go)kithan_visit_end",
            ],

            "sorry": [
                "<kithan_relations:add:3>You do not need to feel sympathy for me. I do not feel sympathy for anyone else.",
                "I have lost the ability to feel sympathy long ago. I've done things that you can not imagine.",
                "(Go)kithin_visit_end"
            ],

            "report_threat": [
                "<kithan_relations:add:-15>I see. You are King lover.",
                "Personally I find that disgusting, but that is just me as an individual. I see that we are not compatible in the slightest.",
                "I will be gone now. Do not let me see you again or... I won't be responsible for my actions.",
                "(End)end"
            ],

            "kithan_visit_end": [
                "You're quite the interesting leader.",
                "Talking to you has proven quite entertaining. Maybe there are some wisdoms that you hold that would prove valuable.",
                "I have to get moving now. The King's hunters will track me down soon.",
                "Until we meet again.",
                "<kithan_relations:more:10>... Thank you.",
                "(End)end"
            ],

            "<no_talk:is:1>end": [""],
        }
    }

    set_possible_response(){
        this.possible_response_dialogue = []
    }

    load_images(){
        this.images["Kithan"] = loadImage('assets/images/kithan.png'); // <- upload your own image and use it here!

        // this.images["Your Character Here"] = loadImage('assets/images/char_name.png'); <- example second image

    }

    load_audio(){
        this.audio = loadSound('assets/audio/kithan_soundtrack.mp3') // <- upload your own soundtrack and use it here!

        // not flyers but maybe something else
        // atomic man
    }
}