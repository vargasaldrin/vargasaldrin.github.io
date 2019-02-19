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
    }
});

document.addEventListener('DOMContentLoaded',function(e){
    // array with texts to type in typewriter
    var dataText = [
        'Front-End Developer',
        'Programmer',
        'React Developer',
        'SEO Enthusiast',
        'Boardgame Enthusiast',
        'Pug Lover',
        'Single',
        'Ready to Mingle'
    ]
    
    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
      // chekc if text isn't finished yet
      if (i < (text.length)) {
        // add next character to description
       document.getElementById("description").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        // wait for a while and call this function again for next character
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      // text finished, call callback if there is a callback function
      else if (typeof fnCallback == 'function') {
        // call callback after timeout
        setTimeout(fnCallback, 700);
      }
    }
    // start a typewriter animation for a text in the dataText array
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
       // check if dataText[i] exists
      if (i < dataText[i].length) {
        // text exists! start typewriter animation
       typeWriter(dataText[i], 0, function(){
         // after callback (and whole text has been animated), start next text
         StartTextAnimation(i + 1);
       });
      }
    }
    // start the text animation
    StartTextAnimation(0);
  });


  /* RESUME' ANIMATION*/

