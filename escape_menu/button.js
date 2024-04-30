export class Button {
    constructor(x, y, width, height, text) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.text = text;
    }

    check_if_clicked(event_handler) {
        if (this.check_clicked(mouseX, mouseY)) {
            this.triggered(event_handler)
        }
    }

    triggered() {
        // to be implemented
    }

    show(){
        fill("rgba(255, 255, 255, 1)")
        rect(this.x, this.y, this.width, this.height)

        if (this.check_clicked(mouseX, mouseY)) {
            fill("rgba(80, 80, 80, 0.5)")
        } else {
            fill("rgba(0, 0, 0, 0.5)")
        }
        rect(this.x, this.y, this.width - 10, this.height-10)

        fill("white")
        text(this.text, this.x, this.y)
    }

    check_clicked(x, y){
        var left = this.x - this.width/2
        var right = this.x + this.width/2
        var top = this.y - this.height/2
        var bot = this.y + this.height/2

        if (x >  left && x < right && y > top && y < bot){
            return true
        }
    }
}