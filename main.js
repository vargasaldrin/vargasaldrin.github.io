/***  Variables and Data***/
const speed = 100;
const main = document.getElementById('main_content');
const about = document.getElementById('about');
const htmlcss = document.getElementById('htmlcss');
const jscript = document.getElementById('javascript');
const webtech = document.getElementById('webtech');
const description = document.getElementById('description');
const slideDown = document.getElementById('slideDown');
const mediaSize = window.matchMedia("(max-width: 576px)");
const closing = document.getElementsByClassName('fa-times');
const blackbox = document.getElementsByClassName('box1')

const titles =  [
    'Front-end Developer',
    'Javascript Developer',
    'Lifelong Learner',
    'React Developer',
    'Boardgame Enthusiast',
    'Loves Pugs',
    'Critical Thinker',
    'Detail Oriented',
    'Ball is life',
    '"Walang matigas na tinapay sa mainit na kape"',
    'Insert Text Here'
]


/***  Functions ***/
inserter = (e) => {
    const text = e.target.title.toString();
    e.target.innerHTML = text;
    e.target.style.cursor = 'pointer';       
};

deleter = (e) => {
    e.target.innerHTML = null;
    about.innerHTML = '<i class="fas fa-question fa-3x">';
    htmlcss.innerHTML = '<i class="fas fa-code fa-2x"></i>';
    jscript.innerHTML = '<i class="fab fa-js-square fa-2x"></i>';
    webtech.innerHTML= '<i class="fas fa-cogs fa-2x"></i>';
};

open = (value) => {
    const toSlide = document.getElementById(value)
    
    let pos = 0;
    const frame = () => {
        if(mediaSize.matches) {
            if (pos == -600) {
                clearInterval(loop);
            } else {
                pos -= 100; 
                toSlide.style.top = pos + 'px'; 
            }
        } else {
            if (pos == -700) {
                clearInterval(loop);
            } else {
                pos -= 100; 
                toSlide.style.top = pos + 'px'; 
            }
        }
    } 
    const loop = setInterval(frame, 100);
};

close = (value) => {
    const toSlide = document.getElementById(value)
    let pos;
    if (mediaSize.matches){
        pos = -600;
    } else {
        pos = -700;
    }
    const frame = () => {
        if (toSlide.style.top == '0px' || !toSlide.style.top) {
          clearInterval(loop);
        } else {
            pos += 100; 
            toSlide.style.top = pos + 'px'; 
        } 
    }
    const loop = setInterval(frame, 100);
};

/***  Event Listeners ***/
for(let i = 0; i < blackbox.length; i++) {
    console.log(blackbox[i])
    blackbox[i].addEventListener('mouseover', (e) => inserter(e))
    blackbox[i].addEventListener('mouseout', (e) => deleter(e))
    blackbox[i].addEventListener('click', (e) => {
        if(e.target == about) {
            open('about2');
            close('htmlcss2');
            close('javascript2');
            close('webtech2');
        } else if(e.target == htmlcss) {
            open('htmlcss2');
            close('about2');
            close('javascript2');
            close('webtech2');
        } else if(e.target == javascript) {
            open('javascript2');
            close('htmlcss2');
            close('about2');
            close('webtech2');
        } else if(e.target == webtech) {
            open('webtech2');
            close('htmlcss2');
            close('javascript2');
            close('about2');
        } else if(e.target == closing) {
            close('about2');
        }
    })
}

document.addEventListener('DOMContentLoaded',function(e){
    let index = 0;
    let letter = 0;
    let interval;
    const description = document.getElementById("description");

    function Type() { 
        var text =  titles[index].substring(0, letter + 1);
        description.innerHTML = text;
        letter++;
        if(text === titles[index]) {
            clearInterval(interval);
            setTimeout(function() {
                interval = setInterval(Delete, 50);
            }, 2000);
        }
    }
    function Delete() {
        var text =  titles[index].substring(0, letter - 1);
        description.innerHTML = text;
        letter--;
        if(text === '') {
            clearInterval(interval);
            if(index == (titles.length - 1))
                index = 0;
            else
                index++;
                letter = 0;
            setTimeout(function() {
                interval = setInterval(Type, 100);
            }, 1000);
        }
    }

    interval = setInterval(Type, 100);
  });