export class Image_Display {
    constructor (image, image_location, image_name, image_manager){
        this.x;
        this.y;
        this.image = image
        this.image_name = image_name
        this.image_location = image_location
        this.fade = 0
        this.fade_level = 5

        if (this.image != null){
            this.set_location(image_location, image_manager.images, image_manager)
        }
    }

    show(event_handler){
        if (this.image != null){
            tint(255, 255, 255, this.fade)
            image(this.image, this.x + event_handler.shake.x, this.y + event_handler.shake.y)
            tint(255, 255, 255)
        }
    }

    update(){
        if (this.fade < 255 && this.fade_level > 0){
            this.fade += this.fade_level
        } else if (this.fade >= 0 && this.fade_level < 0){
            this.fade += this.fade_level
        }
    }

    set_location(image_location, images, image_manager){
        this.y = windowHeight/2
        this.image_location = image_location

        console.log(image_location)

        if (image_location == "left"){
            this.x = windowWidth/3
        } else if (image_location == "right"){
            this.x = windowWidth*2/3
        } else if (image_location == "fade_out"){
            this.fade_level = -5
        } else if (image_location == "middle") {
            this.x = windowWidth/2;
        } else {
            // cont 
            image_manager.change_location(this.image_name, image_location)
            this.image = images[image_location]
            this.image_location = "middle"
        }
    }
}