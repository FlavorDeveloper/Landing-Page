export function animation () {
// Selectores y variables.
    const videoContainer = document.querySelector('.hero-container');
    const main = document.querySelector('.main');
    const gridTxt = document.querySelector('.card__content');
    const gridImage = document.querySelector('.card');
    const gridImage2 = document.querySelector('.section-3-item-image');
    const section4Container = document.querySelector('.section-4');
    const section4Mobile = document.querySelector('.fa-mobile-screen-button');
    const itemSection5 = document.querySelector('.section-5-grid');
    const section5Content = document.querySelector('.section-5-content');
    const section6Container = document.querySelector('.section-6-items-container');
    const section7Grid = document.querySelector('.section-7-grid');

    // Eventos.
    window.addEventListener('load', margin);
    // Funciones.
    function margin() {
        videoContainer.style.marginLeft = '0'
        main.style.opacity = '1'
        
        const observer = new IntersectionObserver(entries=>{

            if(entries[0].isIntersecting){
                gridTxt.style.marginLeft = '0';
                gridImage.classList.add('modificado');
                gridTxt.classList.add('fa-flip');

                setTimeout(() => {
                    gridTxt.classList.remove('fa-flip');
                }, 1000);

                setTimeout(() => {
                    gridImage.classList.add('modificado5')
                }, 5000);
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
                setInterval(() => {
                    section4Mobile.classList.add('fa-shake'); // Agrega la clase
                    setTimeout(() => {
                        section4Mobile.classList.remove('fa-shake'); // Quita la clase después de 1 segundo
                    }, 1000);
                }, 5000);
            }
        })
        observer3.observe(section4Container)

        const observer5 = new IntersectionObserver(entries=>{
            if (entries[0].isIntersecting){
                section5Content.style.opacity = '1';
                itemSection5.classList.add('modificado2');

                setTimeout(() => {
                    itemSection5.classList.add('modificado3');
                }, 5000);

                setTimeout(() => {
                    itemSection5.classList.add('modificado4');
                }, 7000);
            }
        })
        observer5.observe(itemSection5);

        const observer6 = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
                section6Container.style.marginLeft = '0';
            }
        })
        observer6.observe(section6Container);

        const observer7 = new IntersectionObserver(entries=>{
            if(entries[0].isIntersecting){
                section7Grid.style.opacity = '1';
            }
        })
        observer7.observe(section7Grid);
    }
}