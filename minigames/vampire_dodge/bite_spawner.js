import { Vampire_Bite } from "./vampire_bite.js";

export class Bite_Spawner {
    constructor (cooldown, speed) {
        this.cooldown = cooldown;
        this.last_spawned = 0;
        this.speed = speed;
    }


    update(entities, player, game_time) {
        if (game_time - this.last_spawned > this.cooldown) {
            this.last_spawned = game_time
            var target_x = player.x + this.randint(-100, 100)
            var target_y = player.y + this.randint(-100, 100)
            if (this.randint(0, 1) == 1) {
                var attack = new Vampire_Bite((windowWidth + 100) * (-1) ** this.randint(1, 2), this.randint(-windowHeight/2, windowHeight/2),
                target_x, target_y, this.speed + this.randint(-2, 2))
            } else {
                var attack = new Vampire_Bite(this.randint(-windowWidth/2, windowWidth/2), (windowHeight + 100) * (-1) ** this.randint(1, 2),
                target_x, target_y, this.speed + this.randint(-2, 2))
            }

            entities.push(attack)
        }
    }

    randint(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}