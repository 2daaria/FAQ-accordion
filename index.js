// Находим основной контейнер, который содержит все элементы аккордеона
const accordion = document.querySelector('#accordion');

// Вешаем обработчик клика на весь контейнер (делегирование событий)
accordion.addEventListener('click', (event) => {

    // Проверяем: клик был по кнопке или по элементу внутри кнопки
    // Это нужно, чтобы сработало, даже если клик был по <img> внутри кнопки
    if (event.target.matches('.faq__accordion-btn') || event.target.closest('.faq__accordion-btn')) {

        // Находим саму иконку
        const iconButton = event.target.closest('.faq__accordion-btn');

        // Находим div с ответом (от иконки)
        const currentPanel = iconButton.nextElementSibling;
        // Внутри панели ищем текст ответа
        const currentAnswer = currentPanel.querySelector('.faq__answer-text');

        // Защита: если не нашли ответ (на всякий случай), выходим
        if (!currentAnswer) return;

        // Получаем все элементы с ответами
        const answers = document.querySelectorAll('.faq__answer-text');

        // Получаем все кнопки — будем у всех менять иконки
        const buttons = document.querySelectorAll('.faq__accordion-btn');

        // Скрываем все ответы, кроме текущего
        answers.forEach((answer) => {
            if (answer !== currentAnswer) {
                answer.hidden = true;
            }
        })

        // У всех кнопок меняем иконку на "плюс"
        buttons.forEach((btn) => {
            const img = btn.querySelector('img'); // ищем картинку внутри кнопки
            if (img) img.src = 'assets/images/icon-plus.svg'; // ставим иконку "плюс"
        });

        // Переключаем видимость текущего ответа (если был открыт — закроется, и наоборот)
        currentAnswer.hidden = !currentAnswer.hidden;

        // Находим картинку внутри нажатой кнопки
        const img = iconButton.querySelector('img');

        // Меняем src картинки: если скрыто — "плюс", если показано — "минус"
        if (img) {
            img.src = currentAnswer.hidden
                ? 'assets/images/icon-plus.svg'  // если ответ закрыт
                : 'assets/images/icon-minus.svg'; // если открыт
        }
    }
});
