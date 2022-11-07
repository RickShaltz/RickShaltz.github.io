function setup(){
    createCanvas(windowWidth, windowHeight);
    background(30,30,30)
    fill(0)

    textAlign(CENTER, CENTER)
    textSize(24)
    rectMode(CENTER)
    imageMode(CENTER)
    
    event_handler = new Event_Handler();
}

// refit the screen when resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

var event_handler;

function draw(){
    background(30, 30, 30)
    event_handler.refresh_screen()
}

// send mouse clicked to the display
function mouseClicked(){
    event_handler.mouse_input(mouseX, mouseY)
}

// send keyboard input to the display
function keyPressed(){
    event_handler.keyboard_input(key)
}

// Stop the screen from scrolling when spacebar is hit
window.onkeydown = function(e) {
    var elem = e.target.nodename;
    if( elem !== 'TEXTAREA' && elem != 'INPUT' ) {
        return !(e.keyCode == 32);
    }
};