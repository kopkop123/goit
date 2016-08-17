$(function() {
    var link1 = $('#link-1');
    var link2 = $('#link-2');
    var link3 = $('#link-3');
    var tab1 = $('#tab-1');
    var tab2 = $('#tab-2');
    var tab3 = $('#tab-3');
    
    link1.on('click', function(){
        $(this).addClass('active');
        link2.removeClass('active');
        link3.removeClass('active');
        tab1.show();
        tab2.hide();
        tab3.hide();
    });
    
    link2.on('click', function(){
        $(this).addClass('active');
        link1.removeClass('active');
        link3.removeClass('active');
        tab2.show();
        tab1.hide();
        tab3.hide();
    });
    
    link3.on('click', function(){
        $(this).addClass('active');
        link2.removeClass('active');
        link1.removeClass('active');
        tab3.show();
        tab2.hide();
        tab1.hide();
    });
    
    var firstname = $('#firstname');
    var lastname = $('#lastname');
    var address = $('#address');
    var tooltip = $('.tooltip');
    
    firstname.on('focus', function(){
        tooltip.slideUp();
       $(this).next(tooltip).slideDown();
    });
    
    firstname.on('mouseover', function(){
       $(this).next(tooltip).slideDown();
    });
    
    firstname.on('mouseleave', function(){
       $(this).next(tooltip).slideUp();
    });
    
    lastname.on('focus', function(){
        tooltip.slideUp();
       $(this).next(tooltip).slideDown();
    });
    
    lastname.on('mouseover', function(){
       $(this).next(tooltip).slideDown();
    });
    
    lastname.on('mouseleave', function(){
       $(this).next(tooltip).slideUp();
    });
    
    address.on('focus', function(){
        tooltip.slideUp();
       $(this).next(tooltip).slideDown();
    });
    
    address.on('mouseover', function(){
       $(this).next(tooltip).slideDown();
    });
    
    address.on('mouseleave', function(){
       $(this).next(tooltip).slideUp();
    });
});