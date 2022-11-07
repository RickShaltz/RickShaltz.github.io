class Character_Manager{
    constructor(){
        this.soundtrack_playing = null

        this.character_focus = ""
        this.characters = new Object()
        this.set_up_hashmap()
    }

    set_up_hashmap(){
        this.characters['Edlith'] = new Tut_Character()
        this.characters['Ryklee'] = new Ryklee()
        this.characters[""] = new Transition()

        // add your character here!
        // example: this.characters["Character Name Here!"] = new Character_Name()
        // Note: this must be very precise. Make sure your character name and class name matches up!
    }

    initiate_intro(text_box, cult_stats, choice_display, image_manager){
        // To test out your character, replace "Edlith" with your character's name
        // Example: this.character_manager.set_character_focus(text_box, "Character Name Here!", cult_stats)
        this.set_character_focus(text_box, "Ryklee", cult_stats, choice_display, image_manager)
    }

    update_text(text_box, choice_display, cult_stats, image_manager){
        this.characters[this.character_focus].set_dialogue(text_box, choice_display, cult_stats, this, image_manager)
    }

    update_soundtrack(){
        if (this.soundtrack_playing != null){
            this.soundtrack_playing.stop()
        }

        if (this.characters[this.character_focus].audio != null){
            this.soundtrack_playing = this.characters[this.character_focus].audio
            this.soundtrack_playing.setVolume(0.05)
            this.soundtrack_playing.play()
        }
    }

    meet_next_character(text_box, choice_display, cult_stats, image_manager){
        var randomCharacter = "";

        while (randomCharacter == ""){
            randomCharacter = this.randomValueOf(this.characters).name
        }

        this.set_character_focus_reaction(text_box, randomCharacter, choice_display, cult_stats, image_manager)
    }

    set_character_focus_reaction(text_box, character_name, choice_display, cult_stats, image_manager){
        this.character_focus = character_name
        this.characters[this.character_focus].update_reactions(cult_stats)
        this.update_text(text_box, choice_display, cult_stats, image_manager)
        this.update_soundtrack()
    }

    set_character_focus(text_box, character_name, choice_display, cult_stats, image_manager){
        this.character_focus = character_name
        this.update_text(text_box, choice_display, cult_stats, image_manager)
        this.update_soundtrack()
    }

    set_character_focus_dialogue_path(dialogue_path, dialogue_number, text_box, choice_display, cult_stats, image_manager){
        this.characters[this.character_focus].set_dialogue_path(dialogue_path)
        this.characters[this.character_focus].dialogue_number = dialogue_number
        this.update_text(text_box, choice_display, cult_stats, image_manager)
    }

    advance_focus_character(text_box, choice_display, cult_stats, image_manager, event_handler){
        this.characters[this.character_focus].next_dialogue(text_box, choice_display, cult_stats, this, image_manager, event_handler)
    }

    show(text_box){
        this.characters[this.character_focus].show(text_box)
    }

    randomValueOf( obj ) {
        var keys = Object.keys(obj);
        var len = keys.length;
        var rnd = Math.floor(Math.random()*len);
        var key = keys[rnd];
        return obj[key];
    }
}