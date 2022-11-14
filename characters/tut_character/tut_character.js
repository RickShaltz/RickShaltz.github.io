class Tut_Character extends Character{
    constructor(){
        super("Edlith")
        this.set_possible_dialogue()
        this.set_possible_response()
        this.set_colors()
        this.load_images()
        this.load_audio()

        this.character_choices = new Tut_Character_Choices()
    }

    set_possible_dialogue(){
        this.dialogue_path = new Dialogue("intro")
        this.possible_dialogue = {
            "intro": ["{Speaker:Edlith}{Edlith:middle}Wakey wakey there, sleepy head. (Press spacebar to proceed)",
            "You might be wondering where you are.",
            "Where is your rolling red mansion? Your glorious trophies from your hundreds of years as a High Demon General?",
            "Where are your glamorous pecks? Sadly, those have all been stripped from you.",
            "(Choice)why"],

            "why": ["Why? I'm sorry sir, but I haven't a clue!", 
            "All I know is this: for the time being, you are completely mortal.",
            "I know I know! It's distressing news, but we'll get through this!",
            "(Choice)ask_edlith"],

            "calm_reply": ["I agree, sir. This is deeply upsetting, much like the time you ripped out that human's heart and ate it without salt.", 
            "(Go)cont_talk"],

            "angry_reply": ["Sir! Calm down please, you're going to get cardiac arrest! Your human body cannot take such punishment!",
            "(Go)cont_talk"],

            "no_reply": ["Yeah, I would be as speechless as you. In fact, you're almost as speechless as those mortals you rid of tongues a few weeks back.", 
            "(Go)cont_talk"],

            "cont_talk": ["They may have stripped you of your powers, but I know a way for you to get them back.",
            "If we can return enough demonic essence to your body, you should be able to ascend once more!",
            "(Choice)ask_edlith2"],

            "how": ["{Vase:right}This might sound crazy, but if we can gather some humans, their energy will naturally fill this vase.",
            "Once this vase fills, whoever drinks it will become a demon!",
            "(Choice)ask_cult"],

            "kill_humans": ["Sir, calm down! We need the humans alive! Plus, you're mortal now. We can't risk endangering you in combat.",
            "(Go)gather_humans"],

            "lay_down": ["No, you can't give up! You're one of the great Demon Lords of Hell!",
            "My lord, when I was nothing but a lost soul, you rescued my worthless body from the rivers of the damned.",
            "And now that you're lost, I cannot bear to see you give up like this.",
            "Hang in there for me. Okay?",
            "(Choice)okay"],

            "gather_humans": ["{Vase:fade_out}We could start a gathering of some kind, where humans can come and drop by for a chat.",
            "That way, their prescence will fill up the essence jar. If they like it here, then they can come by again.",
            "They have a word for this on Earth. What was it again?",
            "Right! Cult!",
            "All we need now is a name for this cult, sir!",
            "(Keyboard)Name Your Cult=name",
            "[name] is a wonderful name, sir!",
            "(Choice)who"],

            "introduce_edlith": ["Edlith Redmin, at your service, my lord. I'm your steward.",
            "When you were cast out of hell and stripped of your rank, the rest of your entourage abandoned you.",
            "But I chose to stay. After all, how could I betray the demon that rescued me?",
            "(Choice)edlith_stayed"],

            "tears_stay": ["Sir, are you... crying?",
            "(Choice)no_you"],

            "no_you": ["{Edlith:teary_edlith}I... I am.",
            "{teary_edlith:Edlith}But there is no time for that!",
            "(Go)edlith_final_1"],

            "stern_stay": ["<edlith_relations:add:-1>I know you have high standards for stewards. I hope I can fulfill them.",
            "You have my undying loyalty.",
            "(Go)edlith_final_1"],

            "abandon_stay": ["Preposterous! I will never abandon you, my lord! Never!",
            "I stuck by with you when you decided to fry popcorn in Layla's soul furnace, remember?",
            "You have my undying loyalty!",
            "(Go)edlith_final_1"],

            "edlith_final_1": ["Now, onto business. We have to return you to your demonhood.",
            "How should we advertise [name], my lord?",
            "(Choice)advertising"],

            "advertisement_blood": ["The kids will like that for sure! You're a genius, my lord.",
            "<advertisement_stategy:set:blood>(Go)edlith_leaves"],

            "advertisement_secret_cookies": ["Of course. Going for a mysterious appeal, I see. You are as masterful as always.",
            "<advertisement_strategy:set:secret_cookies>(Go)edlith_leaves"],

            "advertisement_friendship": ["Friend...ship? Are you alright, my lord? Hopefully you didn't hit your head?",
            "I do not understand your wisdom at the moment, but I'm sure your plan will come to fruition! I shall do your bidding at once.",
            "<advertisement_strategy:set:friendship>(Go)edlith_leaves"],

            "edlith_leaves": ["Before I leave to follow your orders, please take note of your cult's gold count, popularity, and follower count.",
            "Sir, I noticed that you are lacking on funds. Fear not, for I've saved up for a few decades working as your steward!",
            "Please accept my humble offering of 100 gold coins, my life savings.",
            "(Choice)edlith_gold"],

            "accept_gold": [
                "<Gold:add:100>Thank you, sir. You are most kind.",
                "(Go)edlith_finally_leaves"
            ],

            "decline_gold": [
                "<Popularity:add:5>{Edlith:teary_edlith}Such kind words... My lord, you are the greatest demon I've ever met.",
                "{teary_edlith:Edlith}(Go)edlith_finally_leaves"
            ],

            "edlith_finally_leaves": [
                "Farewell, my lord. I will go advertise the cult now.",
                "The first few visitors should be arriving soon.",
                "(End)edlith_intro_2"
            ],

            "take_gold": [
                "<Gold:add:120>I- right... Of course sir. Please, take the 20 gold pieces I had saved up for my daughter.",
                "<edlith_relations:add:-10>I... I'll be going now.",
                "(End)edlith_intro_2"
            ],

            "<no_talk:is:1>edlith_intro_2": [""], // end of Edlith interactions so far


            // Reactions section
            "wow_cookies" : ["{Edlith:middle}I must say, these cookies make a fine addition, my lord!",
            "(End_Reaction)"]
        }
    }

    set_possible_response(){
        this.possible_response_dialogue = [
            "<advertisement_strategy:is:secret_cookies>wow_cookies",
        ]
    }

    load_images(){
        this.images["Edlith"] = loadImage('assets/images/edlith.png');
        this.images["teary_edlith"] = loadImage('assets/images/teary_edlith.png');
        this.images["Vase"] = loadImage('assets/images/vase.png');
    }

    load_audio(){
        this.audio = loadSound('assets/audio/edlith_soundtrack.mp3')
    }
}