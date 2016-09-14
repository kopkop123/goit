(($ => {
    $.fn.check = function() {
        const $body = $('body');
        const button = this;
        let overlay;
        let modal;
        
        function showModal(e) {
            e.preventDefault();
            overlay = $('<div class="overlay">');
            modal = $('<div class="modal">');
            $body.append(overlay);
            $body.append(modal);
            
            if ($('#check1').is(':checked') && $('#check5').is(':checked') && $('#check9').is(':checked') && 
                $('#check2').is(':not(:checked)') && $('#check3').is(':not(:checked)') &&
                $('#check4').is(':not(:checked)') && $('#check6').is(':not(:checked)') &&
                $('#check7').is(':not(:checked)') && $('#check8').is(':not(:checked)')) {
                modal.append('<div>Все ответы правильные</div>');
            } else if ($("input[type=checkbox]").is(':not(:checked)') || 
                      ($('#check1').is(':not(:checked)') && $('#check2').is(':not(:checked)') && $('#check3').is(':not(:checked)')) ||
                      ($('#check4').is(':not(:checked)') && $('#check5').is(':not(:checked)') && $('#check6').is(':not(:checked)')) ||
                      ($('#check7').is(':not(:checked)') && $('#check8').is(':not(:checked)') && $('#check9').is(':not(:checked)'))) {
                modal.append('<div>Тест не пройден</div>');
            } else if ($('#check2').is(':checked') || 
                       $('#check3').is(':checked') ||
                       $('#check4').is(':checked') ||
                       $('#check6').is(':checked') ||
                       $('#check7').is(':checked') ||
                       $('#check8').is(':checked')) {
                modal.append('<div>Тест не пройден</div>');
            } else {
                modal.append('<div>Тест не пройден</div>');
            };
            
            overlay.one('click', hideModal);
        }
        
        function hideModal() {
            overlay.remove();
            modal.remove();
            $("input[type=checkbox]").removeAttr('checked');
        }
        
        button.on('click', showModal);
    }
}))(jQuery);