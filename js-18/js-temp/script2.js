$(function() {      
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