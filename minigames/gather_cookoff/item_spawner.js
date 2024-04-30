import { Sugar } from "./items/sugar.js"
import { Butter } from "./items/butter.js"
import { Eggs } from "./items/eggs.js"
import { Flour } from "./items/flour.js"

export class Item_Spawner {
    constructor(spawnrate){
        this.last_spawned = 0
        this.spawnrate = spawnrate;
    }

    update(game_time, entities){
        var items = new Set(["Butter", "Eggs", "Flour", "Sugar"])

        if (game_time - this.last_spawned > this.spawnrate){
            this.last_spawned = game_time;
            entities.push(this.generate_ingredient(this.get_random_item(items), this.randint(0, windowWidth), 0, this.randint(1, 4)))
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

    randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    get_random_item(set) {
        let items = Array.from(set);
        return items[Math.floor(Math.random() * items.length)];
    }
}