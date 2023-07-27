document.getElementById('parseButton').addEventListener('click', () => {
    fetch('./data.json')
        .then((response) => response.json())
        .then((parsedData) => {
            if (parsedData.order) {
                const { data, included } = parsedData.order;
                console.log('Data:', data);
                console.log('Included:', included);
            } else {
                console.error('Ошибка: отсутствует свойство "order" в JSON.');
            }
        })
        .catch((error) => {
            console.error('Ошибка при чтении JSON:', error);
        });
});
