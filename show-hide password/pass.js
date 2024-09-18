var myBtn = document.getElementById('my-button'),
    myInput = document.getElementById('my-input');

myBtn.onclick = function() {
    'use strict';
    if(this.textContent === 'Show password') {
        myInput.setAttribute('type', 'text');
        this.textContent = 'Hide password';
    } else {
        myInput.setAttribute('type', 'password');
        this.textContent = 'Show password';
    }
}