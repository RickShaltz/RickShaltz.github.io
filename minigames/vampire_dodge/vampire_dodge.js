import { Bite_Spawner } from "./bite_spawner.js";
import { Player } from "./player.js"

export class Vampire_Dodge {
    constructor(allowed_time, spawnrate, projectile_speed){
        this.entities = []
        this.player;
        this.start_time = new Date()
        this.total_game_time = allowed_time
        this.bite_spawner = new Bite_Spawner(spawnrate, projectile_speed)

        this.text_to_display = null

        this.initialize_game()
    }

    show(){
        var game_time = new Date() - this.start_time;
        var remaining_time = this.total_game_time - game_time;
        if (remaining_time < 0) {
            remaining_time = 0
        }

        if (this.text_to_display != null) {
            textSize(30)
            text(this.text_to_display, windowWidth/2, windowHeight/2)
        }

        for (var i in this.entities) {
            this.entities[i].show()
        }
        this.player.show()

        fill("white")
        textAlign(LEFT, CENTER)
        text("Survive for: " + (remaining_time/1000) + " seconds", 50, 75)
        textAlign(CENTER, CENTER)
    }

    update(){
        var game_time = new Date() - this.start_time;
        var remaining_time = this.total_game_time - game_time;

        if (this.player.lives <= 0) {
            return "number_of_lives_survived:" + this.player.lives
        }

        if (remaining_time > 0 && this.text_to_display != null) {
            this.text_to_display = null
        } else if (remaining_time > 0) {
            this.bite_spawner.update(this.entities, this.player, game_time)
            this.player.update()

            for (var i = this.entities.length - 1; i >= 0; i --) {
                this.entities[i].update()
                if (this.entities[i].update() == "delete") {
                    this.entities.splice(i, 1)
                }
            }
        } else if (this.remaining_time > -2000) {
            this.text_to_display = "You Survived!"
        }
        else {
            return "number_of_lives_survived:" + this.player.lives
        }
    }

    initialize_game(){
        this.player = new Player(mouseX, mouseY);
        this.text_to_display = "DODGE THE INCOMING ATTACKS!"
    }
}