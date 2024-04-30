export class Vampire_Bite {
    constructor (x, y, target_x, target_y, speed) {
        this.x = x
        this.y = y
        this.target_x = target_x
        this.target_y = target_y
        this.image = loadImage('minigames/vampire_dodge/images/bite.png');
        this.r = 75
        this.travel = {x: target_x - x, y: target_y - y};
        this.speed = speed
    }

    update() {
        this.x = this.x + this.speed*this.travel.x
        /Math.sqrt(Math.pow(this.travel.x,2) + Math.pow(this.travel.y,2));
        this.y = this.y + this.speed*this.travel.y
        /Math.sqrt(Math.pow(this.travel.x,2) + Math.pow(this.travel.y,2));

        // Check for out of bounds
        if (this.distance(this.x, this.y, windowWidth/2, windowHeight/2) > 2* windowWidth) {
            return "delete";
        }
    }

    show() {
        image(this.image, this.x, this.y);
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