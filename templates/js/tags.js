document.addEventListener('DOMContentLoaded', function() {
    const selectedTags = new Set();
    const sidebar = document.getElementById('tags-sidebar');
    const container = document.querySelector('.container');
    
    // Обработчик изменения размера сайдбара
    sidebar.addEventListener('resize', function() {
        const newWidth = sidebar.offsetWidth;
        container.style.marginLeft = (newWidth + 20) + 'px';
    });
    
    // Функция для оборачивания элементов в div-ы
    function wrapElementsInDivs() {
        const mainContent = document.querySelector('.container');
        let currentDiv = null;
        
        // Обрабатываем все дочерние элементы контейнера
        Array.from(mainContent.children).forEach(element => {
            // Пропускаем заголовок страницы и разделитель
            if (element.tagName === 'H1' || element.tagName === 'HR') {
                return;
            }
            
            if (element.tagName === 'P') {
                // Если встретили параграф, создаем новый div
                currentDiv = document.createElement('div');
                currentDiv.style.marginBottom = '0.5em';
                mainContent.insertBefore(currentDiv, element);
                currentDiv.appendChild(element);
                
                // Перемещаем все элементы до следующего параграфа в контейнер
                let nextElement = element.nextElementSibling;
                while (nextElement && nextElement.tagName !== 'P') {
                    const temp = nextElement;
                    nextElement = nextElement.nextElementSibling;
                    currentDiv.appendChild(temp);
                }
            }
        });
    }
    
    // Собираем все теги и их частоту
    const tagFrequency = new Map();
    
    // Собираем теги для сайдбара
    document.querySelectorAll('p[tags]').forEach(p => {
        const tags = p.getAttribute('tags').split(',');
        tags.forEach(tag => {
            const trimmedTag = tag.trim();
            tagFrequency.set(trimmedTag, (tagFrequency.get(trimmedTag) || 0) + 1);
        });
    });

    // Сортируем теги по частоте (по убыванию)
    const sortedTags = Array.from(tagFrequency.entries())
        .sort((a, b) => b[1] - a[1]);

    // Добавляем теги в сайдбар
    const tagsList = document.getElementById('tags-list');
    sortedTags.forEach(([tag], index) => {
        const a = document.createElement('a');
        a.textContent = tag;
        // Используем только цвет, без изменения размера
        const colorIndex = (index % 10) + 1;
        a.className = `tag-link tag-size-${colorIndex}`;
        a.addEventListener('click', () => toggleTag(tag, a));
        tagsList.appendChild(a);
    });

    function toggleTag(tag, element) {
        if (selectedTags.has(tag)) {
            selectedTags.delete(tag);
            element.classList.remove('selected');
        } else {
            selectedTags.add(tag);
            element.classList.add('selected');
        }
        filterByTags();
    }
    
    function filterByTags() {
        // Обрабатываем все div-контейнеры
        document.querySelectorAll('.container > div').forEach(div => {
            const p = div.querySelector('p');
            const tags = p ? p.getAttribute('tags') : null;
            
            // Если нет выбранных тегов, показываем все
            if (selectedTags.size === 0) {
                div.style.display = '';
                return;
            }
            
            // Проверяем наличие тегов у параграфа
            const hasTags = tags && tags.trim() !== '';
            
            if (hasTags) {
                const tagArray = tags.split(',').map(t => t.trim());
                const hasMatchingTag = tagArray.some(tag => selectedTags.has(tag));
                div.style.display = hasMatchingTag ? '' : 'none';
            } else {
                // Если у параграфа нет тегов, скрываем его контейнер
                div.style.display = 'none';
            }
        });
    }

    document.getElementById('reset-filter').addEventListener('click', () => {
        selectedTags.clear();
        document.querySelectorAll('.tag-link').forEach(tag => {
            tag.classList.remove('selected');
        });
        // Показываем все контейнеры
        document.querySelectorAll('.container > div').forEach(div => {
            div.style.display = '';
        });
    });
    
    // Оборачиваем элементы в div-ы при загрузке страницы
    wrapElementsInDivs();
}); 