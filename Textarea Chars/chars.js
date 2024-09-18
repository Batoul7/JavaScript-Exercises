var $count = document.getElementById('count'),
    $textarea = document.getElementById('text'),
    $maxLength = $textarea.getAttribute('maxlength');

    $textarea.oninput = function () {
        $count.innerHTML = $maxLength - this.value.length;
        if($count.innerHTML == 0) {
            $count.classList.add('zero');
        } else {
            $count.classList.remove('zero');
        }
    }
