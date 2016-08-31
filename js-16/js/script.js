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
    
    function Human() {
        this.name = 'Paul',
        this.age = 30,
        this.gender = 'male',
        this.height = 170,
        this.weight = 50
    };
    
    var newHuman = new Human();
    
    function Worker() {
        this.work = function() {
            this.work = 'Driver',
            this.salary = 500
        }
    };
    
    var newWorker = new Worker();
    var newWorker1 = new Worker();
    
    function Student() {
        this.WatchSerials = function() {
            this.education = 'school',
            this.grant = 200
        }  
    };
    
    var newStudent = new Student();
    var newStudent1 = new Student();
    
    
    Worker.prototype = newHuman;
    Student.prototype = newHuman;
    
    console.log(newWorker);
    console.log(newWorker1);
    console.log(newStudent);
    console.log(newStudent1);
});