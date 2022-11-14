class Gather_Cookoff_Main {
    constructor(allowed_time, spawn_rate, recipe_length){
        this.entities = []
        this.ingredient_order = new Ingredient_Order(recipe_length)
        this.game_time = 0
        this.total_game_time = allowed_time
        this.remaining_time = 0
        this.item_spawner = new Item_Spawner(spawn_rate)

        this.text_to_display = null

        this.initialize_game()
    }

    show(){
        if (this.text_to_display != null){
            fill("white")
            text(this.text_to_display, windowWidth/2, windowHeight/2)
        }

        this.ingredient_order.show()
        this.show_list(this.entities)
        fill("white")
        textAlign(LEFT, CENTER)
        text("Score: " + this.ingredient_order.score, 50, 50)
        text("Remaining Time: " + (this.remaining_time), 50, 75)
        textAlign(CENTER, CENTER)
    }

    update(){
        this.game_time ++

        if (this.game_time < 100){
            this.text_to_display = "Get Ready!"
        } else if (this.game_time < 150){
            this.text_to_display = "Set!"
        } else if (this.game_time < 200){
            this.text_to_display = "Go!"
        }
        else if (this.remaining_time > 0){
            this.text_to_display = null
            this.update_list(this.entities, this.ingredient_order, this.game_time)
            this.item_spawner.update(this.game_time, this.entities)
        } else if (this.total_game_time - this.game_time > -50) {
            this.text_to_display = "Game Over"
        } else {
            return "cook_off_score:" + this.ingredient_order.score
        }

        this.remaining_time = this.total_game_time - this.game_time
        if (this.remaining_time < 0){
            this.remaining_time = 0
        }
    }

    update_list(list, ingredient_order, game_time){
        for (var i in list){
            list[i].update(list, ingredient_order, game_time)
        }
    }

    show_list(list){
        for (var i in list){
            list[i].show(list)
        }
    }

    initialize_game(){
        this.entities.push(new Oven(50, windowHeight/2))
        this.entities.push(new Oven(windowWidth - 50, windowHeight/2))
        this.entities.push(new Cooking_Bowl(windowWidth/2, windowHeight*2/3))
    }
}