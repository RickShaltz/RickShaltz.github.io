import { Character_Manager } from "./character_manager/character_manager.js";
import {Cult_Stats} from "./cult_stats/cult_stats.js"
import {Text_Box} from "./dialogue_classes/text_box.js"
import {Choice_Display} from "./choice_classes/choice_display.js"
import { Display } from "./display.js";
import { Image_Manager } from "./images_manager/image_manager.js";
import { Minigame_Manager } from "./minigame_manager.js";

export class Event_Handler{
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
        this.display.trigger_click(this)
    }

    keyboard_input(key){
        if (key == "Escape") {
            this.display.menu_open = !this.display.menu_open
        }

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

    save(save_file) {
        var save_object = {}
            save_object["characters"] = {}

            var characters = event_handler.character_manager.characters

            for (var key in characters) {
                save_object["characters"][key] = {
                    dialogue_path: characters[key].dialogue_path.original_dialogue,
                    dialogue_number: characters[key].dialogue_number,
                    already_responded_to: characters[key].already_responded_to
                }
            }
            save_object["character_focus"] = event_handler.character_manager.character_focus
            save_object["cult_stats"] = event_handler.cult_stats.stats

            save_object["image_manager"] = {}

            var images = event_handler.image_manager.images

            for (var key in images) {
                save_object["image_manager"][key] = {
                    image_name : images[key].image_name,
                    image_location : images[key].image_location
                }
            }

            localStorage.setItem(save_file, JSON.stringify(save_object));
    }

    load(save_file) {
        var retrieved = JSON.parse(localStorage.getItem(save_file))
        event_handler.image_manager = new Image_Manager()
        event_handler.text_box = new Text_Box()

        var characters = event_handler.character_manager.characters

        for (var key in retrieved["characters"]) {
            characters[key].dialogue_path = new Dialogue(retrieved["characters"][key].dialogue_path);
            characters[key].dialogue_number = retrieved["characters"][key].dialogue_number
            characters[key].already_responded_to = retrieved["characters"][key].already_responded_to
        }

        var image_manager = event_handler.image_manager;

        for (var key in retrieved["image_manager"]) {
            image_manager.add_image(retrieved["image_manager"][key].image_name,
                                    characters[retrieved["character_focus"]].images[retrieved["image_manager"][key].image_name],
                                    retrieved["image_manager"][key].image_location)
        }

        event_handler.cult_stats.stats = retrieved["cult_stats"]
        event_handler.character_manager.set_character_focus(retrieved["character_focus"], event_handler)
    }
}