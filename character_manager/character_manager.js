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
        this.characters['Hodo'] = new Hodo()
        this.characters['Kithan'] = new Kithan()
        this.characters['Pollen'] = new Pollen()
        this.characters[""] = new Transition()

        // add your character here!
        // example: this.characters["Character Name Here!"] = new Character_Name()
        // Note: this must be very precise. Make sure your character name and class name matches up!
    }

    initiate_intro(event_handler){
        // To test out your character, replace "Edlith" with your character's name
        // Example: this.character_manager.set_character_focus(text_box, "Character Name Here!", cult_stats)
        this.set_character_focus("Edlith", event_handler)
    }

    update_text(event_handler){
        this.characters[this.character_focus].set_dialogue(event_handler)
    }

    update_soundtrack(){
        if (this.soundtrack_playing != null){
            this.soundtrack_playing.stop()
        }

        if (this.characters[this.character_focus].audio != null){
            this.soundtrack_playing = this.characters[this.character_focus].audio
            this.soundtrack_playing.setVolume(0.05)
            this.soundtrack_playing.play()
            this.soundtrack_playing.loop()
        }
    }

    meet_next_character(event_handler){
        var random_character = "";

        while (random_character == ""){
            random_character = this.randomValueOf(this.characters).name
        }

        this.set_character_focus_reaction(random_character, event_handler)
    }

    set_character_focus_reaction(character_name, event_handler){
        var cult_stats = event_handler.cult_stats
        this.character_focus = character_name
        this.characters[this.character_focus].update_reactions(cult_stats)
        this.update_text(event_handler)
        this.update_soundtrack()
    }

    set_character_focus(character_name, event_handler){
        this.character_focus = character_name
        this.update_text(event_handler)
        this.update_soundtrack()
    }

    set_character_focus_dialogue_path(dialogue_path, dialogue_number, event_handler){
        this.characters[this.character_focus].set_dialogue_path(dialogue_path)
        this.characters[this.character_focus].dialogue_number = dialogue_number
        this.update_text(event_handler)
    }

    run_dialogue(event_handler, dialogue){
        this.characters[this.character_focus].set_dialogue(event_handler, dialogue)
    }

    advance_focus_character(event_handler){
        this.characters[this.character_focus].next_dialogue(event_handler)
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