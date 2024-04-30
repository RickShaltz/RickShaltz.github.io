export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 40;
        this.lives = 3
        this.image = loadImage("minigames/vampire_dodge/images/player.png");
    }

    show() {
        image(this.image, this.x, this.y);
    }

    update() {
        this.x = mouseX
        this.y = mouseY
    }

    check_collision(entities) {
        for (var i = entities.length - 1; i >= 0; i--) {
            if (this.circCollision(entities[i])) {
                this.lives -= 1;
                entities.splice(i, 1)
            }
        }
    }

    distance(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    }

    circCollision(circle) { // Check if p5js circles are by diameter or radius
        if (this.distance(this.x, this.y, circle.x, circle.y) > this.r + circle.r && circle != this) {
            return false
        }
        return true
    }
}