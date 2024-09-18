var txt = document.getElementById('my-text');

txt.onfocus = function () {
    'use strict';

    this.setAttribute('data-place', this.getAttribute('placeholder'));
    this.setAttribute('placeholder', '');
}
txt.onblur = function () {
    'use strict';

    this.setAttribute('placeholder', this.getAttribute('data-place'));
    this.setAttribute('data-place', '');
}