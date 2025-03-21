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
    const section6Asterics = document.querySelectorAll('.item-1-image');
    const section7Grid = document.querySelector('.section-7-grid');
    const cardBtnSection2 = document.querySelector('.card__description__cta');
    const cardContainerSection2 = document.querySelector('.card-container');
    const otherScreenContainer = document.querySelector('.texts-other-screen');
    const otherScreenBtnSection2 = document.querySelector('.fa-angles-left--1');
    const otherScreenItem = document.querySelector('.other-screen-item');
    const section3Btn = document.querySelector('.item-link-cta');
    const section3ArrowBtn = document.querySelector('.fa-angles-left--3');
    const section3Container = document.querySelector('.section-3-container-1');
    const section3Container2 = document.querySelector('.section-3-container-2');
    const section5Btn = document.querySelector('.section-5-cta');
    const section5Container = document.querySelector('.section-5-container-1');
    const section5Slidercontainer2 = document.querySelector('.section-5-container-2');
    const section5ArrowBtn = document.querySelector('.fa-angles-left--5');
    const section5Container2 = document.querySelector('.section-5-content-2');
    const section7Btn = document.querySelector('.section-7-cta');
    const section7Container1 = document.querySelector('.section-7-container-1');
    const section7Container2 = document.querySelector('.section-7-grid-2-content');
    const section7Container3 = document.querySelector('.section-7-container-2');
    const section7ArrowBtn = document.querySelector('.fa-angles-left--7');

// Eventos.

    window.addEventListener('load', margin);
    cardBtnSection2.addEventListener('click',animation);
    otherScreenBtnSection2.addEventListener('click',animation2);
    section3Btn.addEventListener('click',animation3);
    section3ArrowBtn.addEventListener('click',animation4);
    section5Btn.addEventListener('click',animation5);
    section5ArrowBtn.addEventListener('click',animation6);
    section7Btn.addEventListener('click',animation7);
    section7ArrowBtn.addEventListener('click',animation8);

// Funciones.

    function margin() {
        videoContainer.style.transform = 'translateX(0)'
        main.style.opacity = '1'
        
        const observer = new IntersectionObserver(entries=>{

            if(entries[0].isIntersecting){
                gridImage.classList.add('modificado');

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
                section4Container.style.transform = 'translateX(0)';
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
                section6Container.style.transform = 'translateX(0)';
                
                section6Asterics.forEach(asteric=>{
                    asteric.classList.add('fa-bounce')
                    
                    setTimeout(() => {
                        asteric.classList.remove('fa-bounce');
                    }, 3000);
                })
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

    function animation (e) {
        e.preventDefault();
        
        cardContainerSection2.style.transform = 'translateX(-100vw)';
        otherScreenContainer.style.transform =  'translateX(-100vw)';
        gridTxt.classList.add('fa-flip')
        otherScreenItem.classList.add('fa-flip');

        setTimeout(() => {
            otherScreenItem.classList.remove('fa-flip');
            gridTxt.classList.remove('fa-flip');
        }, 1000);

        setInterval(() => {
            otherScreenBtnSection2.classList.add('fa-flip'); // Agrega la clase
            setTimeout(() => {
                otherScreenBtnSection2.classList.remove('fa-flip'); // Quita la clase después de 1 segundo
            }, 1000);
        }, 5000);
    }

    function animation2() {
        cardContainerSection2.style.transform = 'translateX(0)';
        otherScreenContainer.style.transform =  'translateX(0)';
        otherScreenItem.classList.add('fa-flip');
        gridTxt.classList.add('fa-flip')
        

        setTimeout(() => {
            otherScreenItem.classList.remove('fa-flip');
            gridTxt.classList.remove('fa-flip');
        }, 1000)
    }

    function animation3 (e) {
        e.preventDefault();

        section3Container.style.transform = 'translateX(-100vw)';
        section3Container2.style.transform = 'translateX(-100vw)';
        

        setInterval(() => {
            section3ArrowBtn.classList.add('fa-flip'); // Agrega la clase
            setTimeout(() => {
                section3ArrowBtn.classList.remove('fa-flip'); // Quita la clase después de 1 segundo
            }, 1000);
        }, 5000);
    }

    function animation4() {
        section3Container.style.transform = 'translateX(0)';
        section3Container2.style.transform = 'translateX(0)';
        section3ArrowBtn.classList.remove('fa-flip');
    }

    function animation5 (e) {
        e.preventDefault();

        section5Container.style.transform = 'translateX(-100vw)';
        section5Slidercontainer2.style.transform = 'translateX(-100vw)';
        section5Container2.classList.add('fa-flip');

        setTimeout(() => {
            section5Container2.classList.remove('fa-flip');
        }, 1000);

        setInterval(() => {
            section5ArrowBtn.classList.add('fa-flip'); // Agrega la clase
            setTimeout(() => {
                section5ArrowBtn.classList.remove('fa-flip'); // Quita la clase después de 1 segundo
            }, 1000);
        }, 5000);
    }

    function animation6() {
        section5Container.style.transform = 'translateX(0)';
        section5Slidercontainer2.style.transform = 'translateX(0)';
        section5Container2.classList.add('fa-flip')

        setTimeout(() => {
            section5Container2.classList.remove('fa-flip');
        }, 1000);

        section5ArrowBtn.classList.remove('fa-flip');
    }

    function animation7 (e) {
        e.preventDefault();

        section7Container1.style.transform = 'translateX(-100vw)';
        section7Container3.style.transform = 'translateX(-100vw)';
        section7Container2.classList.add('fa-flip');

        setTimeout(() => {
            section7Container2.classList.remove('fa-flip');
        }, 1000);

        setInterval(() => {
            section7ArrowBtn.classList.add('fa-flip'); // Agrega la clase
            setTimeout(() => {
                section7ArrowBtn.classList.remove('fa-flip'); // Quita la clase después de 1 segundo
            }, 1000);
        }, 5000);
    }

    function animation8() {
        section7Container1.style.transform = 'translateX(0)';
        section7Container3.style.transform = 'translateX(0)';
        section7Container2.classList.add('fa-flip')

        setTimeout(() => {
            section7Container2.classList.remove('fa-flip');
        }, 1000);

        section7ArrowBtn.classList.remove('fa-flip');
    }
}