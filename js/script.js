// Функция для восстановления прокрутки после полной загрузки
function restoreScroll() {
    const scrollY = localStorage.getItem('scrollY');
    if (scrollY !== null) {
        window.scrollTo(0, parseInt(scrollY, 10));
    }
}

// Обработчик события загрузки страницы
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img');
    let loadedCount = 0;

    // Проверяем, загружены ли все изображения
    images.forEach(img => {
        if (img.complete) {
            loadedCount++;
        } else {
            img.onload = () => {
                loadedCount++;
                if (loadedCount === images.length) {
                    restoreScroll();
                }
            };
        }
    });

    // Если все изображения уже загружены, сразу восстанавливаем
    if (loadedCount === images.length) {
        restoreScroll();
    }
});

// Перед закрытием или обновлением страницы сохраняем текущую позицию
window.addEventListener('beforeunload', () => {
    localStorage.setItem('scrollY', window.scrollY);
});