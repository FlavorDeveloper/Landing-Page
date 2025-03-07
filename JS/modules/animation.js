export function animation () {
// Selectores y variables.
    const videoContainer = document.querySelector('.hero-container');
    const main = document.querySelector('.main');
    const gridTxt = document.querySelector('.card__content');
    const gridImage = document.querySelector('.card');
    const gridImage2 = document.querySelector('.section-3-item-image');
    const section4Container = document.querySelector('.section-4');
    const itemSection5 = document.querySelector('.section-5-grid');
    const section5Content = document.querySelector('.section-5-content');

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

        const observer2 = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
                gridImage2.style.opacity = '1'
            }
        })
        observer2.observe(gridImage2)

        const observer3 = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
                section4Container.style.marginLeft = '0'
            }
        })
        observer3.observe(section4Container)

        const observer5 = new IntersectionObserver(entries=>{
            if (entries[0].isIntersecting){
                section5Content.style.opacity = '1';
                itemSection5.classList.add('modificado2');
            }
        })
        observer5.observe(itemSection5);
    }
}