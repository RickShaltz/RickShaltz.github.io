class Oven extends Item {
    constructor (x, y){
        super("Oven", x, y, 120, 80, 0, loadImage("assets/images/cooking_images/furnace.png"))
        this.collectable = false
    }

    update(entities, ingredient_order){
        super.update(entities)
        this.check_collision(entities, ingredient_order)
    }

    check_collision(entities, ingredient_order){
        for (var i = entities.length-1; i >= 0; i --){
            if (this.intersects(entities[i]) && entities[i].name == "Bowl"){
                if (ingredient_order.verify_recipe(entities[i])){
                    entities[i].inventory = []
                }
            }
        }
    }
}