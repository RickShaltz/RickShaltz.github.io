import { Oven } from "./items/oven.js"
import {Ingredient_Order} from "./ingredient_order.js"
import {Item_Spawner} from "./item_spawner.js"
import {Cooking_Bowl} from "./items/cooking_bowl.js"

export class Gather_Cookoff_Main {
    constructor(allowed_time, spawn_rate, recipe_length){
        this.entities = []
        this.ingredient_order = new Ingredient_Order(recipe_length)
        this.start_time = new Date().getTime()
        this.total_game_time = allowed_time
        this.remaining_time = 0
        this.item_spawner = new Item_Spawner(spawn_rate)

        this.text_to_display = null

        this.initialize_game()
    }

    show(){
        var game_time = new Date().getTime() - this.start_time;
        var remaining_time = this.total_game_time - game_time;
        if (remaining_time < 0) {
            remaining_time = 0
        }


        if (this.text_to_display != null){
            fill("white")
            text(this.text_to_display, windowWidth/2, windowHeight/2)
        }

        this.ingredient_order.show()
        this.show_list(this.entities)
        fill("white")
        textAlign(LEFT, CENTER)
        text("Score: " + this.ingredient_order.score, 50, 50)
        text("Remaining Time: " + (remaining_time/1000) + " seconds", 50, 75)
        textAlign(CENTER, CENTER)
    }

    update(){
        var game_time = new Date().getTime() - this.start_time;
        var remaining_time = this.total_game_time - game_time;
        if (game_time < 1000){
            this.text_to_display = "Get Ready!"
        } else if (game_time < 1500){
            this.text_to_display = "Set!"
        } else if (game_time < 2000){
            this.text_to_display = "Go!"
        }
        else if (remaining_time > 0){
            this.text_to_display = null
            for (var i = this.entities.length - 1; i >= 0; i --) {
                this.entities[i].update(this.entities, this.ingredient_order, game_time)
                if (this.entities[i].y > windowHeight + 50) {
                    this.entities.splice(i, 1)
                }
            }
            this.item_spawner.update(game_time, this.entities)
        } else if (remaining_time > -1000) {
            this.text_to_display = "Game Over"
        } else {
            return "cook_off_score:" + this.ingredient_order.score
        }
        if (remaining_time < 0){
            remaining_time = 0
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