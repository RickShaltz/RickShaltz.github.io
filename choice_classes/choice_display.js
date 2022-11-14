class Choice_Display{
    constructor(){
        this.choices = []
    }

    set_choices(choices_hashmap, cult_stats){

        this.choices = [];
        var count = 0
        var choice_length = 0

        for (var i in choices_hashmap){
            var dialogue_obj = new Dialogue(choices_hashmap[i])

            if (dialogue_obj.check_requirements(cult_stats)){
                choice_length ++
            }
        }

        for (var i in choices_hashmap){
            var dialogue_obj = new Dialogue(choices_hashmap[i])

            if (dialogue_obj.check_requirements(cult_stats)){
                count ++
                var x, y;
                var num_choices = choice_length

                x = windowWidth/2
                y = windowHeight/3 + count*90 - 2*num_choices*90/3

                this.choices.push(new Choice_Box(i, dialogue_obj.dialogue, x, y, windowWidth/2, 70, 
                "rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 1)"))
            }
        }
    }

    show(){
        for (var i = 0; i < this.choices.length; i ++){
            this.choices[i].show()
        }
    }

    check_interaction(mouse_x, mouse_y, event_handler){
        var character_manager = event_handler.character_manager

        for (var i = 0; i < this.choices.length; i ++){
            if (this.choices[i].check_clicked(mouse_x, mouse_y)){
                character_manager.set_character_focus_dialogue_path(this.choices[i].get_if_triggered_text(), 0, 
                event_handler)

                this.choices = []
                return 0
            }
        }
    }
}