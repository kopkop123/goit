function pow() {
    var a = prompt('Введите число', '');
    var b = prompt('Введите степень', '');
    
    var result = Math.pow(a, b);
    
    console.log(result);
}

pow();

function enter() {
    var arr = [];
    for (var i = 0; i < 5; i++) {
        arr[i] = prompt('Введите имя №' + (i + 1), '');
    }
    
    var user = prompt('Введите имя пользователя', '');
    
    for (var i = 0; i < arr.length; i++) {
        if (user === arr[i]) {
            alert(user + ' вы успешно вошли');
            break;
        }  else {
            if (i == 4) {
                alert('Введенное имя пользователя не существует');
            } else {
                continue;
            }
        }
    }
}

enter();