    const stars = document.querySelectorAll('.star');
    const ratingCount = document.querySelector('.rating-count');
    let ratingValue = 0;

    stars.forEach(star => {
        star.addEventListener('click', () => {
            ratingValue = star.getAttribute('data-value');
            updateStars();
            updateRatingCount();
        });
    });

    function updateStars() {
        stars.forEach(star => {
            star.classList.remove('selected');
            if (star.getAttribute('data-value') <= ratingValue) {
                star.classList.add('selected');
            }
        });
    }

    function updateRatingCount() {
        // Aquí puedes implementar la lógica para obtener el número total de ratings
        // Por simplicidad, se mantiene en 0, pero puedes actualizarlo según sea necesario
        ratingCount.textContent = `(${Math.floor(Math.random() * 100)})`; // Simulación de conteo
    }
