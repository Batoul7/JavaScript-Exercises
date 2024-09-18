function showTime() {
    'use strict';

    var today = new Date(),
        hours = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

        if(hours<10) {
            hours='0' + hours;
        }
        if(minutes<10) {
            hours='0' + minutes;
        }
        if(seconds<10) {
            seconds='0' + seconds;
        }
    document.getElementById('clock').textContent = hours + ':' + minutes + ':' + seconds;
}
window.onload = function () {
    setInterval(showTime, 500);
}