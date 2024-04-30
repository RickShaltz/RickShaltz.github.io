import { Kithan_Choices } from "./kithan_choices.js"
import { Character } from "../../character_manager/character.js"
import { Dialogue } from "../../dialogue_classes/dialogue.js"

export class Kithan extends Character{ // <- change Character_Name to your character's name! No spaces or special characters
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
        this.dialogue_path = new Dialogue("intro") // make sure this is the dialogue path you want to start on <encounters:more:3>
        this.possible_dialogue = { // <encounters:more:3>
            "intro": ["(Autosave){Speaker:???}{Kithan:middle}Rah. Rah! RAH!",
            "{Speaker:}The stranger sniffs the air violently and smiles.",
            "{Speaker:???}I smell blood. Free range, GMO free, and with no extra additives. Where are you, my tasty treat?",
            "<shake:set:5>COME OUT! I ONLY WANT TO DEVOUR YOU AS PAINFULLY AS POSSIBLE!",
            "<shake:set:0>{Speaker:}The stranger is drooling. His bloodshot eyes dart around the place, but he hasn't seemed to notice you yet.",
            "What do you do?",
            "(Choice)vampire_encounter"],

            "greet": [
                "{Speaker:}His eyes lock onto you after hearing your words.",
                "{Speaker:???}Ah, there you are!",
                "{Speaker:}He rushes towards you and bites your face off!",
                "(Death)"
            ],

            "run_away": [
                "<shake:set:5>{Speaker:}You take off sprinting in the other direction. He takes off after you, running faster than any land animal you've ever seen.",
                "<shake:set:0>You end up with your back to a wall.",
                "{Speaker:???}There is nowhere to run to now, little weasle! Prepare yourself to be dined upon!",
                "{Speaker:}He lunges towards you!",
                "(Choice)vampire_lunge" // Implement timed events?
            ],

            "hide_behind_chair": [
                "{Speaker:}You hide behind a chair. The stranger sniffs the air and stomps towards you.",
                "<shake:set:5>He grabs the chair.",
                "<shake:set:0>And tosses it away.",
                "{Speaker:???}Found you. RAH!",
                "He lunges towards you!",
                "(Choice)vampire_lunge"
            ],

            "fight": [
                "{Speaker:}You raise your fists. You were a high demon general, after all! Surely you could take a monster or two?",
                "The creature lunges directly at you. You throw out your fist, striking him in the nose and sending him flying to the side!",
                "<hand_broken:true>Unfortunately, your mortal fists crack underneath the pressure of a literal monster. Pain flares up in your hand.",
                "As you are trying to hold in the tears, the creature gets back onto its feet.",
                "{Speaker:???}<shake:set:5>YOU DARE DENY ME OF MY AFTERNOON SNACK? RAHHHH!",
                "<shake:set:0>The beast charges you once again. Prepare to dodge!",
                "(Initiate:vampire_dodge_easy)(Go)after_vampire_dodge"
            ],

            "dodge": [
                "{Speaker:}You try to dodge the beast. You were on the demon track team, after all.",
                "<broken_floor:is:true>Just as you prepare to dodge, you trip over the hole in the ground and fall.",
                "<broken_floor:is:true>The monster bites your face off!",
                "<broken_floor:is:true>(Death)",
                "He lunges towards you, ready to devour your limbs! Prepare to dodge!",
                "(Initiate:vampire_dodge_easy)(Go)after_vampire_dodge"
            ],

            "civilized": [
                "{Speaker:???}No.",
                "{Speaker:}The stranger lunges forward and bites your face off!",
                "(Death)"
            ],

            "close_eyes": [
                "{Speaker:}You close your eyes. If you can't see him, then he can't see you.",
                "He bites your face off.",
                "(Death)"
            ],

            "face_bitten": [
                "<broken_floor:is:true>{Speaker:}As you try to dodge the onslaught of attacks, you accidentally trip over the hole in the ground.",
                "<broken_floor:is:false>{Speaker:}As you try to dodge the onslaught of attacks, you lose your footing and trip.",
                "The monster catches you and bites your face off!",
                "(Death)"
            ],

            "after_vampire_dodge" : [
                "<number_of_lives_survived:less:1>(Go)face_bitten", 
                "{Speaker:}The monster huffs and puffs, sweat dribbling from their forehead.",
                "{Speaker:???}I'm going to... munch... on... your...",
                "{Speaker:}The monster collapses on the ground.",
                "You watch in dismay as the monster slowly transforms. Its claws disappear back into its hand. The once bloodred eyes lose their tint.",
                "{Kithan:middle}...",
                "{Speaker:???}Ugh? Where... where am I?",
                "{Speaker:}The stranger notices your presence.",
                "{Speaker:???}AH! Who are you?",
                "(Choice)who_are_you"
            ],

            "i_am_demon": [
                "A-a-aa-a-a-a-a-a-a-a d-d-d-d-d-d-d-emon overl-l-l-l-lord?",
                "AHHH! I'm so sorry! I didn't mean to intrude upon your abode! Please, spare my life!",
                "{Speaker:}He grovels on the ground, sobbing.",
                "(Choice)question_him"
            ],

            "i_am_joe": [ // How the hell do you spell anhillator? CHECK THIS! (And how do you spell domecile?)
                "J-J-J-J-Joe, the anhillator? Tales of your massacres have spread across the realms!",
                "AHHHHH! I'm so sorry! I didn't mean to intrude upon your private domecile! Please, spare my life!",
                "{Speaker:}He grovels on the ground, sobbing.",
                "(Choice)question_him"
            ],

            "kick_him": [
                "{Speaker:}You kick him while he's down, practically curb stomping him.",
                "<shake:set:5>{Speaker:???}Agh! Ow! I don't know what I did to you, but please stop! I'm sorry!",
                "<shake:set:0>{Speaker:}He grovels on the ground, sobbing.",
                "(Choice)question_him"
            ],

            "ask_name_aggressive": [
                "{Speaker:???}EEEP! Kithan! My name is Kithan! Don't hurt me! I swear on my life, I don't remember how I ended up here!",
                "{Speaker:Kithan}The last thing I remember was that I was working my minimum wage job cleaning washrooms for the king.",
                "And then bam, it all went black and I ended up here.",
                "T-this has been happening more and more recently. I... I don't know what's happening to me.",
                "(Choice)ask_kithan"
            ],


            "ask_name": [
                "{Speaker:???}M-my name is Kithan. Kithan Wiremoth. I... I can't remember how I got here.",
                "{Speaker:Kithan}The last thing I remember was that I was working my minimum wage job for the king, cleaning washrooms.",
                "And then bam, it all went black and I ended up here.",
                "T-this has been happening more and more recently. I... I don't know what's happening to me.",
                "(Choice)ask_kithan"
            ],

            "explain_yourself": [
                "{Speaker:Kithan}I... I was? Me? I can't hurt a fly! No, no, you must have gotten me mixed up with someone else.",
                "(Choice)denial"
            ],

            "yes_mixup": [
                "{Speaker:Kithan}Hew, I'm glad you understand now.",
                "My memory's a bit fuzzy, so can you remind me how I got here?",
                "No...",
                "What if you kidnapped me? No, you certainly kidnapped me!",
                "I'm sorry, but all my relatives are dead or have disowned me, so you're going to have a lot of trouble getting a ransom out of me.",
                "(Choice)kidnapper"
            ],

            "no_mixup": [
                "{Speaker:Kithan}Why are you making all these wild accusations? Y-you're just trying to confuse me, right?",
                "Why would you be trying to confuse me?",
                "No...",
                "What if you kidnapped me? No, you certainly kidnapped me!",
                "I'm sorry, but all my relatives are dead or have disowned me, so you're going to have a lot of trouble getting a ransom out of me.",
                "(Choice)kidnapper"
            ],

            "kick_him_extra": [
                "{Speaker:Kithan}<shake:set:5>AGH! AGH! OW! Why are you doing this? I didn't do anything wrong!",
                "<shake:set:0>Are you some kind of kidnapper or something?",
                "I'm sorry, but all my relatives are dead or have disowned me, so you're going to have a lot of trouble getting a ransom out of me.",
                "(Choice)kidnapper"
            ],

            "nice_to_meet_you": [
                "{Speaker:Kithan}Y-yeah, it's nice to meet you too. Would you mind explaining to me why I suddenly ended up here? I can't seem to remember.",
                "Are you perhaps a kidnapper? I'm sorry, but all my relatives are dead or have disowned me, so you're going to have a lot of trouble getting a ransom out of me.",
                "(Choice)kidnapper"
            ],

            "yes_kidnapped": [

            ],

            // "(Go)example_dialogue_path"]
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