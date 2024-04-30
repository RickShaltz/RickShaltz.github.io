// ESM
// import { stringify, parse} from 'https://cdn.jsdelivr.net/npm/flatted@3.2.7/+esm';

import { Event_Handler } from "./event_handler.js";

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(30,30,30)
    fill(0)

    textAlign(CENTER, CENTER)
    textSize(24)
    rectMode(CENTER)
    imageMode(CENTER)
    
    getAudioContext().resume()
    frameRate(60)

    event_handler = new Event_Handler();
    // if (localStorage) {
    //     event_handler = localStorage.getItem('save_file');
    //     if (event_handler == null) {
    //         event_handler = new Event_Handler();
    //     }
    //     console.log("local storage is supported");
    // } else {
    //     console.log('local storage not supported');
    //     event_handler = new Event_Handler();
    // }
    // console.log(event_handler)
}  

// function save_file() {
//     localStorage.setItem('save_file', event_handler
//      );

//      console.log("SAVED!");
// }

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
    event_handler.keyboard_input(key);

    // if (key == 's') {
    //     save_file();
    // }
}

// Stop the screen from scrolling when spacebar is hit
window.onkeydown = function(e) {
    var elem = e.target.nodename;
    if( elem !== 'TEXTAREA' && elem != 'INPUT' ) {
        return !(e.keyCode == 32);
    }
};

// This will fix the module problem
window.setup = setup;
window.draw = draw;
window.windowResized = windowResized
window.mouseClicked = mouseClicked
window.keyPressed = keyPressed