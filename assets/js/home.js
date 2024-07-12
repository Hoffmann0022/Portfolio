const titulo = document.querySelector('.titulo');

function escrever(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function (){
            elemento.innerHTML += letra;
        }, 100 * i)
    });
}

escrever(titulo);

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll("span");
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1"; 
        }, 400 * (index + 1));
    });
});


window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll(".fade-in-element"); // Corrigido para pegar todos os elementos
    const windowHeight = window.innerHeight;

    elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < windowHeight) {
            setTimeout(() => {
                element.style.opacity = "1"; // Torna o elemento visível
            }, 10 * (index * 0.3));
        }
    });
});


let cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (event) =>{
    cursor.style.left = event.pageX + 'px';
    cursor.style.top = event.pageY + 'px';
})


document.addEventListener('DOMContentLoaded', () => {
    const hoverElements = document.querySelectorAll('.hover-element');
    const targetElement = document.querySelector('.target-element');

    hoverElements.forEach(hoverElement => {
        hoverElement.addEventListener('mouseenter', () => {
            targetElement.classList.add('highlight');
        });

        hoverElement.addEventListener('mouseleave', () => {
            targetElement.classList.remove('highlight');
        });
    });
});
