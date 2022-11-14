class Item {
    constructor(name, x, y, width, height, speed, image){
        this.name = name
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = speed
        this.image = image;
        this.collectable = true
    }

    show(){
        image(this.image, this.x, this.y)
    }

    update(entities){
        this.y += this.speed
        for (var i = entities.length-1; i >= 0; i --){
            if (this.y > this.windowHeight){
                entities.splice(i, 1)
            }
        }
    }

    set_image(image){
        this.image = image
    }

    intersects(rect) {
        var leftSide = rect.x - rect.width/2;
        var rightSide = rect.x + rect.width/2;
        var topSide = rect.y - rect.height/2;
        var botSide = rect.y + rect.height/2;

        if (rect == this){
            return false;
        }

        if (this.x + this.width/2 >= leftSide && this.x - this.width/2 <= rightSide &&
         this.y + this.height/2 >= topSide && this.y - this.height/2 <= botSide){ 
            return true;
        } else{
            return false;
        }
    }
}