var myText = 'Hello from Elzero web school Hello from Elzero web school',
    i=0,
    myBtn = document.getElementById('button');

myBtn.onclick = function () {
    'use strict';
    var typeWriter = setInterval(function() {

        document.getElementById('type').textContent += myText[i];
        i++;
        if (i > myText.length-1) {
            clearInterval(typeWriter);
        }
    },100);
}