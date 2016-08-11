var page = {
    el_wrapper: document.createElement('div'),
    el_title: document.createElement('div'),
    el_form: document.createElement('form'),
    el_question_1: document.createElement('div'),
    el_list_wrap_1: document.createElement('ul'),
    el_list_1: document.createElement('li'),
    el_list_2: document.createElement('li'),
    el_list_3: document.createElement('li'),
    
    el_question_2: document.createElement('div'),
    el_list_wrap_2: document.createElement('ul'),
    el_list_4: document.createElement('li'),
    el_list_5: document.createElement('li'),
    el_list_6: document.createElement('li'),
    
    el_question_3: document.createElement('div'),
    el_list_wrap_3: document.createElement('ul'),
    el_list_7: document.createElement('li'),
    el_list_8: document.createElement('li'),
    el_list_9: document.createElement('li'),
    
    el_submit: document.createElement('input'),
    
    insert_view: function () {
        this.el_wrapper.classList.add('wrapper');
        document.body.appendChild(this.el_wrapper);
        
        this.el_title.classList.add('title');
        this.el_title.innerHTML = 'Тест по программированию';
        this.el_wrapper.appendChild(this.el_title);
        
        this.el_wrapper.appendChild(this.el_form);
        
        this.el_question_1.classList.add('question_title');
        this.el_question_1.innerHTML = '1. Вопрос №1';
        this.el_form.appendChild(this.el_question_1);
        
        this.el_form.appendChild(this.el_list_wrap_1);
        
        this.el_list_1.innerHTML = '<input type="checkbox" id="check1"><label for="check1">Вариант ответа №1</label>';
        this.el_list_wrap_1.appendChild(this.el_list_1);
        
        this.el_list_2.innerHTML = '<input type="checkbox" id="check2"><label for="check2">Вариант ответа №2</label>';
        this.el_list_wrap_1.appendChild(this.el_list_2);
        
        this.el_list_3.innerHTML = '<input type="checkbox" id="check3"><label for="check3">Вариант ответа №3</label>';
        this.el_list_wrap_1.appendChild(this.el_list_3);
        
        // Question 2
        this.el_question_2.classList.add('question_title');
        this.el_question_2.innerHTML = '2. Вопрос №2';
        this.el_form.appendChild(this.el_question_2);
        
        this.el_form.appendChild(this.el_list_wrap_2);
        
        this.el_list_4.innerHTML = '<input type="checkbox" id="check4"><label for="check4">Вариант ответа №1</label>';
        this.el_list_wrap_2.appendChild(this.el_list_4);
        
        this.el_list_5.innerHTML = '<input type="checkbox" id="check5"><label for="check5">Вариант ответа №2</label>';
        this.el_list_wrap_2.appendChild(this.el_list_5);
        
        this.el_list_6.innerHTML = '<input type="checkbox" id="check6"><label for="check6">Вариант ответа №3</label>';
        this.el_list_wrap_2.appendChild(this.el_list_6);
        
        // Question 3
        this.el_question_3.classList.add('question_title');
        this.el_question_3.innerHTML = '3. Вопрос №3';
        this.el_form.appendChild(this.el_question_3);
        
        this.el_form.appendChild(this.el_list_wrap_3);
        
        this.el_list_7.innerHTML = '<input type="checkbox" id="check7"><label for="check7">Вариант ответа №1</label>';
        this.el_list_wrap_3.appendChild(this.el_list_7);
        
        this.el_list_8.innerHTML = '<input type="checkbox" id="check8"><label for="check8">Вариант ответа №2</label>';
        this.el_list_wrap_3.appendChild(this.el_list_8);
        
        this.el_list_9.innerHTML = '<input type="checkbox" id="check9"><label for="check9">Вариант ответа №3</label>';
        this.el_list_wrap_3.appendChild(this.el_list_9);
        
        this.el_submit.classList.add('button_submit');
        this.el_submit.setAttribute("type", "submit");
        this.el_submit.setAttribute("value", "Проверить мои результаты");
        this.el_form.appendChild(this.el_submit);
    }
};

page.insert_view();