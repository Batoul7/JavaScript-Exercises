var myInput = document.getElementById('my-input');

myInput.onfocus= function () {
    'use strict';
    
    if(this.placeholder ==='Type your name') {
        this.placeholder = '';
    }
}

myInput.onblur= function () {
    'use strict';

    if(this.placeholder ==='') {
        this.placeholder = 'Type your name';
    }
}