let body = document.querySelector('body');
let keys = document.querySelectorAll('.keys');
let spaceKey = document.querySelector('.space_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let text_input = document.querySelector('.text'); 

let container = document.createElement('div');
container.className = 'container';

let keyWrapp = document.createElement('div');
keyWrapp.className = 'keyboard_wrapp';

let allkey = document.createElement('div');
allkey.className = 'keyboard_keys';

let row = document.createElement('div');
row.className = 'row'

let input = document.createElement('input');
input.type = 'text';

body.appendChild(container);
container.appendChild(keyWrapp);
container.appendChild(input);
keyWrapp.appendChild(allkey);
allkey.appendChild(row);



let keyboard = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16,17, 255, 18, 32, 18, 17, 37, 38, 40, 39]
 document.onkeydown = (e) => {
    keyboard.push(e.keyCode)
    console.log(keyboard)
    
} 

 function init(){
let out ='';
for(let i = 0; i< keyboard.length; i++){
    out += '<div class="keys">'+String.fromCharCode(keyboard[i])+'</div>'
}
document.querySelector('.row').innerHTML = out;
}

init() 