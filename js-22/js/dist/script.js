'use strict';

$(function () {
    'use strict;';

    var html = $('#tmp').html();
    var data = {
        title: 'Тест по программированию',
        question_1: '1. Вопрос №1',
        answer_1_1: 'Вариант ответа №1',
        answer_1_2: 'Вариант ответа №2',
        answer_1_3: 'Вариант ответа №3',
        question_2: '2. Вопрос №2',
        answer_2_1: 'Вариант ответа №1',
        answer_2_2: 'Вариант ответа №2',
        answer_2_3: 'Вариант ответа №3',
        question_3: '3. Вопрос №3',
        answer_3_1: 'Вариант ответа №1',
        answer_3_2: 'Вариант ответа №2',
        answer_3_3: 'Вариант ответа №3',
        check: 'Проверить мои результаты'
    };

    var content = tmpl(html, data);

    var test = JSON.stringify(data);
    var local = localStorage.setItem('info', test);
    var getlocal = localStorage.getItem('info');
    getlocal = JSON.parse(getlocal);

    $('.template-wrapper').append(content);

    var submit = $('.button_submit');
    submit.check();
});
