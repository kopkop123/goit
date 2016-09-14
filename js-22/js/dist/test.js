var app = {
    pow: function pow(a,b) {

        var r = a;

        for (var i = 1; i < b; i++) {
            r *= a;
        }

        console.log(r);
    }
};

app.pow(2,3);

try {
    module.exports = app;
} catch (e) {}
