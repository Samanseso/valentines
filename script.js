var i = 0;
var j = 0;
var message1 = "Happy Valentine's Day Tracy!";
var message2 = "I have prepared a message for you. Would you like to...         ";
var speed = 50;

function typeAnim() {
    if (i < message1.length) {
        document.getElementById('greet').innerHTML += message1.charAt(i);
        i++;
    }

    if (i >= message1.length && j < message2.length) {
        document.getElementById('message').innerHTML += message2.charAt(j);
        j++;
    }

    if (i >= message1.length && j >= message2.length) {
        document.getElementById('buttons').style.display = 'flex';
    }

    setTimeout(typeAnim, speed);
}

var scale_value = 1.1;

function enlarge_yes() {
    var str = "" + scale_value;
    document.getElementById('btn-yes').style.scale = str;
    scale_value += .1;
}