
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
});

var swiper = new Swiper('.mySwiper', {
    pagination: {
        el: '.swiper-pagination',
    },
});
