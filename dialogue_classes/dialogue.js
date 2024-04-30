export class Dialogue{
    constructor(dialogue){
        this.dialogue;
        this.requirements = [];
        this.original_dialogue = dialogue;

        this.set_requirements(dialogue)
        //this.set_req_dialogue()
    }

    set_requirements(dialogue){
        this.dialogue = dialogue;
        if (!dialogue.includes("<")){
            return false
        }

        var requirement = dialogue.slice(dialogue.indexOf("<") + 1, dialogue.indexOf(">"))
        var variable = requirement.slice(0, requirement.indexOf(":"))
        requirement = requirement.slice(requirement.indexOf(":") + 1, requirement.length)
        var operator = requirement.slice(0, requirement.indexOf(":"))
        var value = requirement.slice(requirement.indexOf(":") + 1, requirement.length)

        var obj = {
            variable: variable,
            operator: operator,
            value: value
        }

        this.requirements.push(obj)
        this.set_requirements(dialogue.slice(this.dialogue.indexOf(">") + 1, this.dialogue.length))
    }

    set_req_dialogue(){
        this.req_dialogue = this.dialogue
        if (this.requirements.length > 0){
            for (var req in this.requirements){
                this.req_dialogue = "<" + req.variable + ":" + req.operator + ":" + req.value + ">" + this.req_dialogue
            }
        }
    }

    // variable: "", operator: "", value: ""
    check_requirements(cult_stats){
        if (this.requirements == null){
            return true
        }
        for (var i = 0; i < this.requirements.length; i ++){
            var requirement = this.requirements[i]

            // convert string to float  
            if (!isNaN(parseFloat(requirement.value))){
                requirement.value = parseFloat(requirement.value)
            }

            if (requirement.operator == "add"){
                if (!(requirement.variable in cult_stats.stats)){
                    cult_stats.stats[requirement.variable] = requirement.value
                }else {
                    cult_stats.stats[requirement.variable] += requirement.value
                }
            } else if (requirement.operator == "set"){
                cult_stats.stats[requirement.variable] = requirement.value
            } else {
                if (!(requirement.variable in cult_stats.stats)){
                    if ( requirement.value <= 0 || requirement.operator == "not"){
                        return true
                    } else {
                        return false
                    }
                }
                switch(requirement.operator){
                    case "more":
                        if (cult_stats.stats[requirement.variable] < requirement.value){
                            return false
                        }
                        break;
                    case "less":
                        if (cult_stats.stats[requirement.variable] > requirement.value){
                            return false
                        }
                        break;
                    case "is":
                        if (cult_stats.stats[requirement.variable] != requirement.value){
                            return false
                        }
                        break;
                    case "not":
                        if (cult_stats.stats[requirement.variable] == requirement.value){
                            return false
                        }
                        break;
                }
            }
        }
        return true
    }
}