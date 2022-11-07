class Text_Box{
    constructor(){
        this.text = ""
        this.text_color = "rgba(255, 255, 255, 1)"
        this.border_color = "rgba(255, 255, 255, 1)"

        this.character_speaking = ""

        this.width = 800
        this.height = 200
    }

    show(fade){
        this.show_box_border()
        this.show_dialogue(fade)
        this.show_character_box()
    }

    set_text(text, cult_stats){
        var skip_line = false
        var insert_variable = true
        this.text = ""

        for (var i = 0; i < text.length; i++){
            this.text += text[i]
            
            if (i % 60 == 0 && i != 0){
                skip_line = true
            }

            if (text[i] == " " && skip_line){
                this.text += "\n"
                skip_line = false
            }
        }
        
        while (insert_variable){
            insert_variable = false

            if (this.text.includes("[")){
                insert_variable = true

                var variable = this.text.slice(this.text.indexOf("[") + 1, this.text.indexOf("]"))
                this.text = this.text.slice(0, this.text.indexOf("[")) + cult_stats.stats[variable] + 
                this.text.slice(this.text.indexOf("]") + 1, this.text.length)
            }
        }
    }

    set_character_speaking(character_name, text_color, border_color){
        this.character_speaking = character_name
        
        if (text_color != null){
            this.text_color = text_color
        } else {
            this.text_color = "rgba(255, 255, 255, 1)"
        }

        if (border_color != null){
            this.border_color = border_color
        } else {
            this.border_color = "rgba(255, 255, 255, 1)"
        }
    }

    show_box_border(){
        fill(this.border_color)
        rect(windowWidth/2, 4*windowHeight/5, this.width, this.height)
        fill(30, 30, 30)
        rect(windowWidth/2, 4*windowHeight/5, this.width - 20, this.height-20)
    }

    show_dialogue(fade){
        fill(this.text_color.slice(0, this.text_color.length-2) + fade/255 + ")")
        text(this.text, windowWidth/2, 4*windowHeight/5)
    }

    show_character_box(){
        if (this.character_speaking != ""){
            var center_location_x = windowWidth/2 - 2*this.width/5
            var center_location_y = 4*windowHeight/5 - this.height/2

            fill(this.border_color)
            rect(center_location_x, center_location_y, this.width/3, this.height/3)
            fill(30, 30, 30)
            rect(center_location_x, center_location_y, this.width/3-20, this.height/3-20)
            
            fill(this.text_color)
            text(this.character_speaking, center_location_x, center_location_y)
        }
    }
}