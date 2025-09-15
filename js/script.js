document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slideshow .slide');
    let currentSlide = 0;

    if (slides.length > 0) {
        // 最初のスライドをアクティブにする
        slides[0].classList.add('is-active');

        setInterval(() => {
            // 現在のスライドから is-active クラスを削除
            slides[currentSlide].classList.remove('is-active');

            // 次のスライドのインデックスを計算
            currentSlide = (currentSlide + 1) % slides.length;

            // 次のスライドに is-active クラスを追加
            slides[currentSlide].classList.add('is-active');
        }, 5000); // 5秒ごとに切り替え
    }
});
