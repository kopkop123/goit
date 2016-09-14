$(() => {  
    'use strict;'    
    
    const html = $('#tmp').html();
    const data = {
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
    
    const content = tmpl(html, data);
    
    
    const test = JSON.stringify(data);
    const local = localStorage.setItem('info', test);
    let getlocal = localStorage.getItem('info');
    getlocal = JSON.parse(getlocal);
    
    $('.template-wrapper').append(content);
    
    const submit = $('.button_submit');
    submit.check();
    
    
    const app = {
	pow() {
    const a = prompt('Введите число', '');
    const b = prompt('Введите степень', '');
    
    let r = a;

    for (let i = 1; i < b; i++) {
        r *= a;
    }
    
    console.log(r);
}
};
});