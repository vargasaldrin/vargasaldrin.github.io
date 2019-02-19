const sample = document.getElementById('asdf');

sample.addEventListener('mouseover', () => {
    console.log('working');
    sample.style.animation = 'appear 2s';
});

