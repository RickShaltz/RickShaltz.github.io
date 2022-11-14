class Cooking_Bowl extends Item {
    constructor(x, y){
        super("Bowl", x, y, 120, 80, 0, loadImage("assets/images/cooking_images/bowl.png"))
        this.inventory = []
        this.stunned_time = 0
        this.game_time = 0
        this.collectable = false
    }

    update(entities, ingredient_order, game_time){
        this.x = mouseX
        this.y = mouseY
        this.game_time = game_time
        this.check_collision(entities, ingredient_order)
    }

    check_collision(entities, ingredient_order){
        if (this.game_time - this.stunned_time > 50){
            for (var i = entities.length-1; i >= 0; i --){
                if (this.intersects(entities[i]) && entities[i].collectable){
                    if (ingredient_order.verify_ingredient(entities[i], this.inventory.length)){
                        this.inventory.push(entities[i])
                    } else {
                        this.stunned_time = this.game_time
                        this.inventory = []
                    }
    
                    entities.splice(i,1)
                }
            }
        }
    }

    show(){
        for (var i in this.inventory){
            fill("rgb(0, 204, 0)")
            rect(this.inventory[i].x, this.inventory[i].y, 100, 100)
        }

        if (this.game_time - this.stunned_time <= 50 && this.game_time > 250){
            tint(255, 0, 0)
        }
        super.show()
        tint(255, 255, 255)
    }
}