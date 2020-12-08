alert('Загадайте карту');

let rang = '';
let color = '';

if (confirm("Красный цвет?")) {
    if (confirm("Черва?")) {
        color = 'Черва';
    } else {
        color = 'Буба';
    }
} else {
    if (confirm("Пика?")) {
        color = 'Пика';
    } else {
        color = 'Крести';
    }
}

if (confirm("Высшего ранга?")) {
    if (confirm("Старше дамы?")) {
        if (confirm("Король?")) {
            rang = 'Король';
        } else {
            rang = 'Туз';
        }
    } else {
        if (confirm("Валет?")) {
            rang = 'Валет';
        } else {
            rang = 'Дама';
        }
    }
} else {
    rang = prompt('Введите цифру');
}
