export function animation () {
// Selectores y variables.
    const videoContainer = document.querySelector('.hero-container');
    const main = document.querySelector('.main');
    const gridTxt = document.querySelector('.card__content');
    const gridImage = document.querySelector('.card');
    // Eventos.
    window.addEventListener('load', margin);
    // Funciones.
    function margin() {
        videoContainer.style.marginLeft = '0'
        main.style.opacity = '1'
        
        const observer = new IntersectionObserver(entries=>{

            if(entries[0].isIntersecting){
                gridTxt.style.marginLeft = '0';
                gridImage.classList.add('modificado')
            }
        })

        observer.observe(gridTxt);
            
    }
}