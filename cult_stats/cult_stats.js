class Cult_Stats{
    constructor(){
        this.stats = {
            "Encounters": 0,
            "Followers" : 0,
            "Popularity" : 0,
            "Gold" : 0
        }

        this.cult_stats_display = new Cult_Stats_Display(10, windowHeight/2, 20, 50)// mostly for dev log

        this.images = {}
        this.load_images()
    }

    check_clicked(x, y){
        if (this.cult_stats_display.check_clicked(x, y)){
            this.cult_stats_display.clicked_on()
        }
    }

    update(){
        this.cult_stats_display.update()
        this.cult_stats_population_update()
    }

    cult_stats_population_update(){
        this.stats["Followers"] = 0
        for (var i in this.stats){
            if (i.slice(0, 8) == "follower"){
                this.stats["Followers"] += 1
            }
        }
    }

    show(){
        this.cult_stats_display.show(this)
        this.display_stat("Gold", 100, 50)
        this.display_stat("Popularity", 230, 50)
        this.display_stat("Followers", 350, 50)
    }

    display_stat(stat, x, y){
        var width = 100
        var height = 30

        fill("rgba(225, 225, 225, 0.5)")
        rect(x, y, width, height)
        tint(255, 255, 255)
        image(this.images[stat], x - width/2 + 5, y)

        textAlign(RIGHT, CENTER)
        fill ("white")
        text(this.stats[stat], x + width/2 - 5, y+2)
        textAlign(CENTER, CENTER)
    }

    load_images(){
        this.images['Gold'] = loadImage('assets/images/gold_coin.png');
        this.images['Popularity'] = loadImage('assets/images/popularity.png');
        this.images['Followers'] = loadImage('assets/images/followers.png');
    }
}