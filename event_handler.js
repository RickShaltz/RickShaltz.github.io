class Event_Handler{
    constructor(){
        this.user_input = ""
        this.take_user_keyboard = false
        this.message;
        this.stat_to_change;

        this.character_manager = new Character_Manager()
        this.cult_stats = new Cult_Stats()
        this.text_box = new Text_Box()
        this.choice_display = new Choice_Display()
        this.display = new Display()
        this.image_manager = new Image_Manager()
        
        this.minigame_manager = new Minigame_Manager()
        //this.minigame_manager.set_active_minigame()

        this.intro_sequence_initiated = false

        this.shake = {
            x: 0,
            y: 0
        }
    }

    next_event(){

    }

    initiate_intro_event(){
        this.intro_sequence_initiated = true
        this.character_manager.initiate_intro(this)
    }

    mouse_input(mouse_x, mouse_y){
        this.choice_display.check_interaction(mouse_x, mouse_y, this)
        this.cult_stats.check_clicked(mouse_x, mouse_y)
    }

    keyboard_input(key){
        if (!this.display.load_ready){
            getAudioContext().resume()
            if (this.display.loading >= 100){
                this.display.ready()
            }
            return 0;
        }

        if (this.take_user_keyboard){
            if (key == "Backspace"){
                this.user_input = this.user_input.slice(0,-1)
            } else if (key.length == 1) {
                this.user_input += key
            } else if (key == "Enter"){
                this.trigger_enter()
            }
        } else {
            if (key == " " && !this.image_manager.fade_out){
                this.trigger_space() // Finish this function!
            }
        }
    }

    trigger_enter(){
        if (this.take_user_keyboard){
            this.cult_stats.stats[this.stat_to_change] = this.user_input
            this.take_user_keyboard = false
            this.character_manager.advance_focus_character(this)
        }
    }

    trigger_space(){
        if(this.minigame_manager.active_minigame == null){
            this.character_manager.advance_focus_character(this)
        }
    }

    refresh_screen(){
        if (this.minigame_manager.active_minigame == null){
            this.display.show(this)
            this.cult_stats.update()
            this.image_manager.update()
            this.display.update_loading()
            this.update()
        } else {
            this.minigame_manager.show()
            var returned = this.minigame_manager.update()
            if (returned != null){
                this.minigame_manager = new Minigame_Manager()
                var stat_to_change = returned.score.slice(0, returned.score.indexOf(":"))
                var stat = returned.score.slice(returned.score.indexOf(":") + 1, returned.score.length)
                this.cult_stats.stats[stat_to_change] = stat

                this.character_manager.run_dialogue(this, returned.dialogue_after)
            }
        }
    }

    set_active_minigame(minigame, dialogue_after){
        this.minigame_manager.set_active_minigame(minigame, dialogue_after)
    }

    allow_keyboard_input(message, stat_to_change){
        this.take_user_keyboard = true
        this.message = message
        this.stat_to_change = stat_to_change
    }

    update(){
        if (this.display.loading == 100 && !this.intro_sequence_initiated){
            this.initiate_intro_event()
        }


        let shake = this.cult_stats.stats['shake']
        if (shake != null){
            this.shake.x = this.randint(-shake, shake)
            this.shake.y = this.randint(-shake, shake)
        }
    }

    randint(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}