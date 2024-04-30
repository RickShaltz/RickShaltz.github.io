import {Image_Display} from "./image.js"

export class Image_Manager{
    constructor(){
        this.images = new Map()
        this.images["background"] = new Image_Display()
        this.fade_out = false
    }

    add_image(image_name, image, image_location){
        this.images[image_name] = new Image_Display(image, image_location, image_name, this)
    }

    set_background(image){
        this.images["background"] = new Image_Display(image, "middle", "background", this)
    }

    change_location(previous_location, new_location){
        this.images[new_location] = this.images[previous_location];
        delete this.images[previous_location]
    }

    show(event_handler){
        for (var image in this.images){
            this.images[image].show(event_handler)
        }
    }

    update(){
        for (var image in this.images){
            this.images[image].update()

            if (this.images[image].fade < 0){
                delete this.images[image]
            }
        }

        if (Object.keys(this.images).length == 0){
            this.fade_out = false
        }
    }

    fade_images(){
        for (var image in this.images){
            if (this.images[image].name != "background"){
                this.images[image].fade_level = -5
            }
        }

        this.fade_out = true
    }
}