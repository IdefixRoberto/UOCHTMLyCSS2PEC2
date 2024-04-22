document.addEventListener('DOMContentLoaded', function () {
    const stars = document.querySelectorAll('.cuiners__concursant__stars i');

    stars.forEach(star => {
        star.addEventListener('mouseover', function() {
            clearStars(this.parentElement); // Neteja primer totes les estrelles
            let tempStar = this;
            // Afegeix 'selected' des de l'estrella actual fins a la primera
            while (tempStar) {
                tempStar.classList.add('selected');
                tempStar = tempStar.previousElementSibling;
            }
        });

        star.addEventListener('click', function() {
            clearStars(this.parentElement, true); // Manté les 'clicked' si n'hi ha
            let tempStar = this;
            // Marca les estrelles com a 'clicked' des de l'estrella actual fins a la primera
            while (tempStar) {
                tempStar.classList.add('clicked');
                tempStar = tempStar.previousElementSibling;
            }
        });

        star.addEventListener('mouseout', function() {
            restoreClickedStars(this.parentElement); // Restaura les estrelles marcades com a 'clicked'
        });
    });
});

function clearStars(container, keepClicked = false) {
    container.querySelectorAll('i').forEach(s => {
        s.classList.remove('selected');
        if (!keepClicked) {
            s.classList.remove('clicked');
        }
    });
}

function restoreClickedStars(container) {
    const stars = container.querySelectorAll('i');
    let clicked = false;
    stars.forEach(s => {
        if (s.classList.contains('clicked')) {
            clicked = true;
            while (s) {
                s.classList.add('selected');
                s = s.previousElementSibling;
            }
        }
    });
    if (!clicked) {
        stars.forEach(s => s.classList.remove('selected'));
    }
}

