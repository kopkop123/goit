$(function() {  
    $('#search').on('click', function(){
        $('.img-result').remove();
        var API_KEY = '3194517-4b828b06718630aa5859376c4';
        var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent($('#query').val());
        $.getJSON(URL, function(data){
            if (parseInt(data.totalHits) > 0)
                $.each(data.hits, function(i, hit){ 
                    $('.result').append('<a class="img-result" target="_blank" href="' + hit.pageURL + '" title="' + hit.pageURL + '"><img src="' + hit.previewURL + '"></a>');
                });
            else
                console.log('No hits');
        });
    });
});