class Minigame_Manager {
    constructor(){
        this.active_minigame = null
        this.dialogue_after = null
        this.minigames = {
            "gather_cookoff_easy": new Gather_Cookoff_Main(5000, 50, 3)
        }
    }

    show(){
        if (this.active_minigame != null){
            this.minigames[this.active_minigame].show()
        }
    }

    update(){
        if (this.active_minigame != null){
            var returned = this.minigames[this.active_minigame].update()
            
            if (returned != null){
                var returned_obj = {
                    score: returned,
                    dialogue_after: this.dialogue_after
                }
                return returned_obj
            }
        }
    }

    set_active_minigame(minigame_name, dialogue_after){
        this.active_minigame = minigame_name
        this.dialogue_after = dialogue_after
    }
}