var count = 1;
var count2 = 1;
var count3 = 1;

$(function(){
    // Слайдер#1
    $('#slider1_1').addClass('show-cell').removeClass('hide');

    $('#arrows1 .steps__arrows--right').on('click', function(){
        $('#slider1_' + count).addClass('hide').removeClass('show-cell');
        $('#slider1_' + ++count).addClass('show-cell').removeClass('hide');
        if(count == 4) { count = 1; $('#slider1_1').addClass('show-cell').removeClass('hide'); }
        if ($('#slider1_1').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--2 steps__block--3').addClass('steps__block--1'); }
        else if ($('#slider1_2').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--3').addClass('steps__block--2'); }
        else { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--2').addClass('steps__block--3'); }
    });

    $('#arrows1 .steps__arrows--left').on('click', function(){
        $('#slider1_' + count).addClass('hide').removeClass('show-cell');
        $('#slider1_' + --count).addClass('show-cell').removeClass('hide');
        if(count == 0) { count = 3; $('#slider1_3').addClass('show-cell').removeClass('hide') }
        if ($('#slider1_1').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--2 steps__block--3').addClass('steps__block--1'); }
        else if ($('#slider1_2').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--3').addClass('steps__block--2'); }
        else { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--2').addClass('steps__block--3'); }
    });

    // Слайдер#2
	$('#slider2_1').addClass('show-cell').removeClass('hide');

	$('#arrows2 .steps__arrows--right').on('click', function(){
		$('#slider2_' + count2).addClass('hide').removeClass('show-cell');
		$('#slider2_' + ++count2).addClass('show-cell').removeClass('hide');
		if(count2 == 4) { count2 = 1; $('#slider2_1').addClass('show-cell').removeClass('hide'); }
        if ($('#slider2_1').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--3').addClass('steps__block--2'); }
        else if ($('#slider2_2').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--2').addClass('steps__block--3'); }
        else { $(this).closest('.steps__block').removeClass('steps__block--3 steps__block--2').addClass('steps__block--1'); }
	});

	$('#arrows2 .steps__arrows--left').on('click', function(){
		$('#slider2_' + count2).addClass('hide').removeClass('show-cell');
		$('#slider2_' + --count2).addClass('show-cell').removeClass('hide');
		if(count2 == 0) { count2 = 3; $('#slider2_3').addClass('show-cell').removeClass('hide') }
        if ($('#slider2_1').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--3').addClass('steps__block--2'); }
        else if ($('#slider2_2').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--2').addClass('steps__block--3'); }
        else { $(this).closest('.steps__block').removeClass('steps__block--3 steps__block--2').addClass('steps__block--1'); }
	});
	// Слайдер#3
	$('#slider3_1').addClass('show-cell').removeClass('hide');

	$('#arrows3 .steps__arrows--right').on('click', function(){
		$('#slider3_' + count3).addClass('hide').removeClass('show-cell');
		$('#slider3_' + ++count3).addClass('show-cell').removeClass('hide');
		if(count3 == 4) { count3 = 1; $('#slider3_1').addClass('show-cell').removeClass('hide'); }
        if ($('#slider3_1').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--3').addClass('steps__block--3'); }
        else if ($('#slider3_2').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--2 steps__block--3').addClass('steps__block--1'); }
        else { $(this).closest('.steps__block').removeClass('steps__block--3 steps__block--2').addClass('steps__block--2'); }
	});

	$('#arrows3 .steps__arrows--left').on('click', function(){
		$('#slider3_' + count3).addClass('hide').removeClass('show-cell');
		$('#slider3_' + --count3).addClass('show-cell').removeClass('hide');
		if(count3 == 0) { count3 = 3; $('#slider3_3').addClass('show-cell').removeClass('hide') }
        if ($('#slider3_1').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--2 steps__block--3').addClass('steps__block--1'); }
        else if ($('#slider3_2').hasClass('show-cell')) { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--3').addClass('steps__block--2'); }
        else { $(this).closest('.steps__block').removeClass('steps__block--1 steps__block--2').addClass('steps__block--3'); }
	});
    
    // Поиск 
    jQuery.support.cors = true;
    var random_image_url = 'http://api.pixplorer.co.uk/image?word=&amount=7&size=tb';
    $.getJSON(random_image_url, function(data){
        if (parseInt(data.count) > 0)
            $.each(data.images, function(i, image){
                $('.ideas__wrapper').append('<div class="ideas__item"><span class="ideas__text">' + image.word +'</span><img src="' + image.imageurl + '"></div>');
            });
        else
            console.log('No hits');
    });
    
    $('.search__btn').on('click', function(e){
        e.preventDefault();
        var search_text = encodeURIComponent($('.search__input').val());
        var random_image_url = 'http://api.pixplorer.co.uk/image?word='+ search_text +'&amount=7&size=tb';
        $('.ideas__item').remove();
        $.getJSON(random_image_url, function(data){
        if (parseInt(data.count) > 0)
            $.each(data.images, function(i, image){
                $('.ideas__wrapper').append('<div class="ideas__item"><span class="ideas__text">' + image.word +'</span><img src="' + image.imageurl + '"></div>');
            });
        else
            console.log('No hits');
        });
        $('.search__input').val('');
    });
    
    $('.ideas__wrapper').masonry({
        // options
        itemSelector: '.ideas__item',
        columnWidth: 200,
        gutter: 10
    });
    
//    $('.search__btn').on('click', function(e){
//        e.preventDefault();
////        $.getJSON('http://api.pixplorer.co.uk/image?word=&amount=7&size=tb', function(data){
////            console.log(data);
////            $('.ideas__wrapper').append('<div class="ideas__item"><span class="ideas__text">' + "image.word" +'</span><img src="http://atlasprirodirossii.ru/wp-content/uploads/2012/01/Kukushka-e1453202562371.jpg"></div>');
////        });
//        
//        
//        
//    });
    
    
})