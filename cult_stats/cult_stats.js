class Cult_Stats{
    constructor(){
        this.stats = {
            "Encounters": 0,
            "Followers" : 0,
            "Popularity" : 0,
            "Happiness" : 0,
            "Gold" : 0,
        }

        this.cult_stats_display = new Cult_Stats_Display(10, windowHeight/2, 20, 50)
    }

    check_clicked(x, y){
        if (this.cult_stats_display.check_clicked(x, y)){
            this.cult_stats_display.clicked_on()
        }
    }

    update(){
        this.cult_stats_display.update()
    }

    show(){
        this.cult_stats_display.show(this)
    }
}