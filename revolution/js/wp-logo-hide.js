window.addEventListener ('scroll', reveal);

function reveal (){
    let reveals = document.getElementById('wpLogo')
    
    for (let i = 0; i < reveals.lenght; i++){
        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 50;

        if (revealtop < windowheight - revealpoint){
            // reveals[i].classList.add('shown');            
            console.log('Corneta')
        } else {
            // reveals[i].classList.remove('shown')
            console.log('Corneton')

        }
    }
}