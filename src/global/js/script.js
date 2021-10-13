
window.addEventListener('load', () => {

    // REGISTER VH UNIT HEIGHT
    
    const setVHUnit = () => document.documentElement.style.setProperty('--vh', window.innerHeight / 100 + 'px');

    setVHUnit();
    window.addEventListener('resize', setVHUnit);

})