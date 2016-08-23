$(function() {    
    $('.wrapper').slider();
    
    var html = $('#tmp').html();
    var data = {
        title: 'Цымбаленко Денис Андреевич',
        work: 'В поиске работы',
        learn: 'Хочу учить фронтенд, потому что:',
        reason_1: 'Это сейчас востребовано',
        reason_2: 'Платят много',
        reason_3: 'Можно работать в любое время, даже по ночам',
        contact: 'Мой контактный телефон<br> 0952053476',
        vk: 'Мой профиль вконтакте<br> <a href="https://vk.com/id1751060">vk.com</a>',
        feedback: 'Мой фидбек:<br> Играю на саксофоне'
    }
    
    var content = tmpl(html, data);
    
    $('.template-wrapper').append(content);
});