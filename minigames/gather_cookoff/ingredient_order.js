import { Sugar } from "./items/sugar.js"
import { Butter } from "./items/butter.js"
import { Eggs } from "./items/eggs.js"
import { Flour } from "./items/flour.js"

export class Ingredient_Order {
    constructor(recipe_length){
        this.ingredients = []
        this.score = 0
        this.difficulty = recipe_length
        this.random_order(this.difficulty)
    }

    show(){
        fill("grey")
        rect(windowWidth/2, windowHeight*3/4, this.ingredients.length * 100, 100)
        for (var i in this.ingredients){
            this.ingredients[i].show()
        }
    }

    verify_ingredient(ingredient, index){
        if (this.ingredients.length <= index || this.ingredients[index].name != ingredient.name){
            return false
        }

        ingredient.x = this.ingredients[index].x
        ingredient.y = this.ingredients[index].y
        return true
    }

    verify_recipe(bowl){
        if (bowl.inventory.length != this.ingredients.length){
            return false
        }

        for (var i in this.ingredients){
            if (this.ingredients[i].name != bowl.inventory[i].name){
                return false
            }
        }

        this.random_order(this.difficulty)
        this.score ++ 
        return true
    }

    random_order(order_length){
        this.ingredients = []
        var items = new Set(["Butter", "Eggs", "Flour", "Sugar"])

        for (var i = 0; i < order_length; i ++){
            var x = windowWidth/2 + i*100 - (order_length-1)*100/2
            var y = windowHeight*3/4
            this.ingredients.push(this.generate_ingredient(this.get_random_item(items), x, y, 0))
        }
    }

    generate_ingredient(type, x, y, speed){
        if (type == "Butter"){
            return new Butter(x, y, speed)
        } else if (type == "Eggs"){
            return new Eggs(x, y, speed)
        } else if (type == "Flour"){
            return new Flour(x, y, speed)
        } else if (type == "Sugar"){
            return new Sugar(x, y, speed)
        }
    }

    get_random_item(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)];
    }
}