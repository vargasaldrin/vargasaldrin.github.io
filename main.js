/***  Variables ***/
const speed = 100;
const main = document.getElementById('main_content');
const about = document.getElementById('about');
const htmlcss = document.getElementById('htmlcss');
const jscript = document.getElementById('javascript');
const webtech = document.getElementById('webtech');
const description = document.getElementById('description');
const slideDown = document.getElementById('slideDown');
const mq = window.matchMedia("(max-width: 576px");
const closing = document.getElementsByClassName('fa-times');
const list = [
    'Front-End Developer',
    'Programmer',
    'React Developer',
    'SEO Enthusiast',
    'Boardgame Enthusiast',
    'Pug Lover',
    'Funny Man',
    ':)'
]
const mediaSize = window.matchMedia("(max-width: 576px");

/***  Functions ***/



inserter = (e) => {
    const txt = e.target.title.toString();
    e.target.innerHTML = txt;
    e.target.style.cursor = 'pointer';       
};

deleter = (e) => {
    e.target.innerHTML = null;
    about.innerHTML = '<i class="fas fa-question fa-3x">';
    htmlcss.innerHTML = '<i class="fas fa-code fa-2x"></i>';
    jscript.innerHTML = '<i class="fab fa-js-square fa-2x"></i>';
    webtech.innerHTML= '<i class="fas fa-cogs fa-2x"></i>';
};

slideIn = (e) => {
    let toSlide = document.getElementById(e)
    var pos = 0;
    const frame = () => {
        if(mq.matches) {
            if (pos == -600) {
                clearInterval(interv);
            } else {
                pos -= 100; 
                toSlide.style.top = pos + 'px'; 
            }
        } else {
            if (pos == -700) {
                clearInterval(interv);
            } else {
                pos -= 100; 
                toSlide.style.top = pos + 'px'; 
            }
        }
        
    }  
    var interv = setInterval(frame, 100);
};

slideOut = (e) => {
    let toSlide = document.getElementById(e);
    let pos;
    if (mq.matches){
        pos = -600;
    } else {
        pos = -700;
    }
    const frame = () => {
        if (toSlide.style.top == '0px' || !toSlide.style.top) {
          clearInterval(interv);
        } else {
            pos += 100; 
            toSlide.style.top = pos + 'px'; 
        } 
    }  
    var interv = setInterval(frame, 100);
};

/***  Event Listeners ***/
main.addEventListener('mouseover', (e) => {
    if (e.target == about) {
        inserter(e);
    } else if (e.target == htmlcss) {
        inserter(e)
    } else if (e.target == jscript) {
        inserter(e)
    } else if (e.target == webtech) {
        inserter(e)
    }
});

main.addEventListener('mouseout', (e) => {
    if (e.target == about){
        deleter(e);
    } else if (e.target == htmlcss){
        deleter(e);
    } else if (e.target == jscript){
        deleter(e);
    } else if (e.target == webtech){
        deleter(e);
    }
}); 

main.addEventListener('click', (e) => {
    if(e.target == about) {
        slideIn('about2');
        slideOut('htmlcss2');
        slideOut('javascript2');
        slideOut('webtech2');
    } else if(e.target == htmlcss) {
        slideIn('htmlcss2');
        slideOut('about2');
        slideOut('javascript2');
        slideOut('webtech2');
    } else if(e.target == javascript) {
        slideIn('javascript2');
        slideOut('htmlcss2');
        slideOut('about2');
        slideOut('webtech2');
    } else if(e.target == webtech) {
        slideIn('webtech2');
        slideOut('htmlcss2');
        slideOut('javascript2');
        slideOut('about2');
    } else if(e.target == closing) {
        slideOut('about2');
    }
});

document.addEventListener('DOMContentLoaded',function(e){
    // List of sentences
    var _CONTENT = [ 
        'Front-end Developer',
        'Javascript Developer',
        'Lifelong Learner',
        'React Developer',
        'Boardgame Enthusiast',
        'Loves Pugs',
        'Critical Thinker',
        'Detail Oriented',
        'Ball is life',
        '"Walang matigas na tinapay sa mainit na kape"'
    ];

    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.getElementById("description");

    // Implements typing effect
    function Type() { 
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if(text === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
    }

    // Implements deleting effect
    function Delete() {
    var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if(text === '') {
        clearInterval(_INTERVAL_VAL);

        // If last sentence then display the first one, else move to the next
        if(_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;
        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function() {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
    }

    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);
  });


  /* RESUME' ANIMATION*/