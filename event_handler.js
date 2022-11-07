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

        this.intro_sequence_initiated = false
    }

    next_event(){

    }

    initiate_intro_event(){
        this.intro_sequence_initiated = true
        this.character_manager.initiate_intro(this.text_box, this.cult_stats, this.choice_display, this.image_manager)
    }

    mouse_input(mouse_x, mouse_y){
        this.choice_display.check_interaction(mouse_x, mouse_y, this.text_box, this.character_manager, this.cult_stats, this.image_manager)
        this.cult_stats.check_clicked(mouse_x, mouse_y)
    }

    keyboard_input(key){
        if (!this.display.load_ready){
            this.display.ready()
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
            this.character_manager.advance_focus_character(this.text_box, this.choice_display, this.cult_stats, 
                this.character_manager, this.image_manager, this)
        }
    }

    trigger_space(){
        this.character_manager.advance_focus_character(this.text_box, this.choice_display, this.cult_stats, this.image_manager, this)
    }

    refresh_screen(){
        this.display.show(this.user_input, this.text_box, this.cult_stats, this.character_manager, this.choice_display,
            this.image_manager, this)
        this.cult_stats.update()
        this.image_manager.update()
        this.display.update_loading()
        this.update()
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
    }
}