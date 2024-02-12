var i = 0;
var j = 0;
var message1 = "lorem ipsum dolor semet";
var message2 = "Would you like to reschedule it?       ";
var speed = 1;

function typeAnim() {
    if (i < message1.length) {
        document.getElementById('first').innerHTML += message1.charAt(i);
        i++;
    }

    if (i >= message1.length && j < message2.length) {
        document.getElementById('second').innerHTML += message2.charAt(j);
        j++;
    }

    if (i >= message1.length && j >= message2.length) {
        document.getElementById('buttons').style.display = 'block';
    }

    setTimeout(typeAnim, speed);
}

var scale_value = 1.1;

function enlarge_yes() {
    var str = "" + scale_value;
    document.getElementById('btn-yes').style.scale = str;
    scale_value += .1;
}