export class Choice_Box{
    constructor(text, if_triggered_text, x, y, width, height, box_color, text_color){
        this.text = text
        this.if_triggered_text = if_triggered_text
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        if (box_color != null){
            this.box_color = box_color
        } else {
            this.box_color = "rgba(255, 255, 255, 1)"
        }

        if (text_color != null){
            this.text_color = text_color
        } else {
            this.text_color = "rgba(255, 255, 255, 1)"
        }
    }

    show(){
        fill(this.box_color)
        rect(this.x, this.y, this.width, this.height)

        if (this.check_clicked(mouseX, mouseY)) {
            fill("rgba(80, 80, 80, 0.5)")
        } else {
            fill("rgba(0, 0, 0, 0.5)")
        }
        rect(this.x, this.y, this.width - 10, this.height-10)

        fill(this.text_color)
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

    get_if_triggered_text(){
        return this.if_triggered_text
    }
}