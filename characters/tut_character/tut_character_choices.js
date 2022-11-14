class Tut_Character_Choices extends Character_Choices{
    constructor(){
        super()
    }

    initiate_choice(choice, possible_dialogue, text_box, choice_display, cult_stats){
        var hash;
        switch(choice){
            case "why":
                hash = {
                    "Why?" : "why"
                }
                break;
            case "ask_edlith":
                hash = {
                    "This is deeply upsetting." : "calm_reply",
                    "RAH! I WILL GET MY REVENGE!" : "angry_reply",
                    "..." : "no_reply"
                }
                break;
            case "ask_edlith2":
                hash = {
                    "How?" : "how",
                    "How!?": "how"
                }
                break;
            case "ask_cult":
                hash = {
                    "I WILL DRINK HUMAN BLOOD TO RESTORE MY DEMONHOOD!" : "kill_humans",
                    "How can we gather humans?": "gather_humans",
                    "It's doomed. I'm just going to lay down and die.": "lay_down"
                }
                break;
            case "okay":
                hash = {
                    "Okay." : "gather_humans"
                }
                break;
            case "who":
                hash = {
                    "Who are you again?" : "introduce_edlith"
                }
                break;
            case "edlith_stayed":
                hash = {
                    "Thank you, Edlith (smiles as tears stream down your cheek)" : "tears_stay",
                    "As expected of my steward": "stern_stay",
                    "HA! I would've abandoned me!": "abandon_stay"
                }
                break;
            case "no_you":
                hash = {
                    "No, you are crying" : "no_you"
                }
                break;
            case "advertising":
                hash = {
                    "HANG UP POSTERS OF BLOODY BLOOD!" : "advertisement_blood",
                    "Give out panphlets with the word 'friendship' plastered on them": "advertisement_friendship",
                    "Secretly hand out invitations with the promise of free cookies": "advertisement_secret_cookies"
                }
                break;
            case "edlith_gold":
                hash = {
                    "Thank you. I will return it as soon as I can." : "accept_gold",
                    "I cannot accept this. You worked hard for that money.": "decline_gold",
                    "Give me everything you got.": "take_gold"
                }
                break;
        }
        choice_display.set_choices(hash, cult_stats)
    }
}