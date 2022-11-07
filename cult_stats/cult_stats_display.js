class Cult_Stats_Display{
    constructor(x, y, width, height){
        this.x = x 
        this.y = y
        this.orig_x = x
        this.orig_y = y
        this.x_speed = 0
        this.width = width
        this.height = height
    }

    show(cult_stats){
        fill(255, 255, 255)
        rect(this.x, this.y, this.width, this.height)
        fill(0, 0, 0)
        text("<", this.x, this.y)

        fill(255, 255, 255)
        rect(this.x - 100 - this.width/2, this.y, 200, 3*windowHeight/4)
        var i = 0
        for (var stat in cult_stats.stats){
            i ++ 
            fill(0, 0, 0)
            textAlign(LEFT)
            textSize(12)
            text(stat + ": " + cult_stats.stats[stat], this.x - 190 - this.width/2, this.y - windowHeight/3 + (i+1)*30)
            textAlign(CENTER, CENTER)
            textSize(24)
        }

    }

    clicked_on(){
        if (this.x <= this.orig_x){
            this.x_speed = 10
        } else {
            this.x_speed = -10
        }
    }

    update(){
        this.x += this.x_speed

        if (this.x + this.width/2 > this.orig_x + 200){
            this.x_speed = 0
        } else if (this.x - this.width/2 < this.orig_x){
            this.x_speed = 0
        }
    }

    check_clicked(x, y){
        var left = this.x - this.width/2
        var right = this.x + this.width/2
        var top = this.y - this.height/2
        var bot = this.y + this.height/2

        if (x >  left && x < right && y > top && y < bot){
            return true
        }
        return false
    }

}