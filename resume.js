/*** Variables ***/
const resume = document.getElementById('resume');
const resumePDF = document.getElementById('resumePDF');
const certificate = document.getElementById('certificate');

/***  Functions ***/
inserter = (e) => {
    const txt = e.target.title.toString();
    e.target.innerHTML = txt;
    e.target.style.cursor = 'pointer';       
};

deleter = (e) => {
    e.target.innerHTML = null;
    resumePDF.innerHTML = '<i class="fas fa-file-alt fa-2x">';
    certificate.innerHTML = '<i class="fas fa-certificate fa-2x">';
};


/***  Event Listeners ***/

resume.addEventListener('mouseover', (e) => {
    if (e.target == resumePDF) {
        console.log("hehehe");
        inserter(e);
    } else if (e.target == certificate) {
        console.log('hehehe');
        inserter(e);
    }
});

resume.addEventListener('mouseout', (e) => {
    if (e.target == resumePDF) {
        console.log('awawawawaw');
        deleter(e);
    } else if (e.target == certificate) {
        console.log('awawawawaw');
        deleter(e);
    }
});