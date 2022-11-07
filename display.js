class Display {
    constructor(){
        this.loading = 0
        this.load_ready = false
    }

    show(user_input, text_box, cult_stats, character_manager, choice_display, image_manager, event_handler){
        if (this.loading < 100){
            fill(255, 255, 255)
            textSize(40)
            text("LOADING", windowWidth/2, windowHeight/2)
            rect(windowWidth/2, windowHeight/3, windowWidth*3/4 *this.loading/100, 50)
        } else if (!this.load_ready){
            text("Press Anything To Start", windowWidth/2, windowHeight/2)
        } 
        
        else if (event_handler.take_user_keyboard){
            this.show_name_selection(user_input, event_handler.message)
        } 
        else if (this.load_ready){
            image_manager.show()
            character_manager.show(text_box)
            cult_stats.show()
            choice_display.show()
        }

        // if (cult_stats.name == ""){
        //     this.show_name_selection(user_input)
        // }
    }

    ready(){
        this.load_ready = true
    }
        
    show_name_selection(user_input, message){
        fill(255, 255, 255)
        text(message, windowWidth/2, windowHeight/3)
        text(user_input, windowWidth/2, windowHeight/2)
    }

    update_loading(){
        if (this.loading < 100){
            this.loading += 1
        }
    }
}