var i = 0;
var j = 0;
var k = 0;
var l = 0;
var m = 0;
var n = 0;
var o = 0;
var p = 0;

var line1 = "I'm a slave for no reason     ";
var line2 = "Cativated by those eyes     ";
var line3 = "Can't break free from your prison     ";
var line4 = "And I am not surprised     ";

var line5 = "Everyday you build me up     ";
var line6 = "But also you let me down     ";
var line7 = "I cannot make you stop     ";
var line8 = "I love having you aroun     '";

var speed = 50;

function typeAnim() {
    if (i < line1.length) {
        document.getElementById('line1').innerHTML += line1.charAt(i);
        i++;
    }

    else if (i >= line1.length && j < line2.length) {
        document.getElementById('line2').innerHTML += line2.charAt(j);
        j++;
    }

    else if (j >= line2.length && k < line3.length) {
        document.getElementById('line3').innerHTML += line3.charAt(k);
        k++;
    }


    else if (k >= line3.length && l < line4.length) {
        document.getElementById('line4').innerHTML += line4.charAt(l);
        l++;
    }

    else if (l >= line4.length && m < line5.length) {
        document.getElementById('line5').innerHTML += line5.charAt(m);
        m++;
    }

    else if (m >= line5.length && n < line6.length) {
        document.getElementById('line6').innerHTML += line6.charAt(n);
        n++;
    }

    else if (n >= line6.length && o < line7.length) {
        document.getElementById('line7').innerHTML += line7.charAt(o);
        o++;
    }


    else if (o >= line7.length && p < line8.length) {
        document.getElementById('line8').innerHTML += line8.charAt(p);
        p++;
    }
    setTimeout(typeAnim, speed);
}