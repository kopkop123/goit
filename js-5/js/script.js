var h = document.getElementById("hours");
var m = document.getElementById("minutes");
var s = document.getElementById("seconds");
var m_s = document.getElementById("m_seconds");

h = 0;
m = 0;
s = 0;
m_s = 0;

function timer () {
    var start = document.getElementById("start");
    var pause = document.getElementById("pause");
    var clear = document.getElementById("clear");

    
    h.innerHTML = '00';
    m.innerHTML = '00';
    s.innerHTML = '00';
    m_s.innerHTML = '00';

    
    var s_interval = setInterval(function() {
        m_s++;
        if (m_s <= 9) {
            m_s = '00' + m_s;
        }
        
        if (m_s > 9 && m_s < 100) {
            m_s = '0' + m_s;
        }
        
        if (m_s == 1000) {
            s++;
            if (s < 10) {
                s = '0' + s;
            }
            document.getElementById("seconds").innerHTML = s;
            m_s = 0;
        }
        
        if (s == 59) {
            m++;
            if (m < 10) {
                m = '0' + m;
            }
            document.getElementById("minutes").innerHTML = m;
            s = 0;
            s = '0' + s;
        }
        
        if (m == 59) {
            h++;
            if (h < 10) {
                h = '0' + h;
            }
            
            document.getElementById("hours").innerHTML = h;
            m = 0;
            m = '0' + m;
        }
         
        document.getElementById("m_seconds").innerHTML = m_s;
    }, 1);
    
    pause.onclick = function() {
        clearInterval(s_interval);
        this.classList.add("none");
        start.classList.remove("none");
        console.log(s);
    };
    
    clear.onclick = function() {
        clearInterval(s_interval);
        start.classList.remove("none");
        pause.classList.add("none");
        h = 0;
        m = 0;
        s = 0;
        m_s = 0;
        document.getElementById("seconds").innerHTML = '00';
        document.getElementById("minutes").innerHTML = '00';
        document.getElementById("hours").innerHTML = '00';
        document.getElementById("m_seconds").innerHTML = '00';
    };
}

start.onclick = function() {
    timer();
    this.classList.add("none");
    pause.classList.remove("none");
};