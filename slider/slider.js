var sliderImgs = Array.from(document.querySelectorAll('.slider-container img')),
    slidesCount = sliderImgs.length;

// set current slide
var currentSlide = 1;

var slideNumber = document.getElementById('slider-number');

var nextBtn = document.getElementById('next'),
    prevBtn = document.getElementById('prev');

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

// create ul + li
var element= document.createElement('ul');
element.setAttribute('id', 'element-ul');

for (var i=1; i <= slidesCount; i++) {
    var item= document.createElement('li');
    item.setAttribute('data-index', i);
    item.appendChild(document.createTextNode(i));
    element.appendChild(item);
}
document.getElementById('indicators').appendChild(element);
// end ul
var elementNew = document.getElementById('element-ul');

var bullets = Array.from(document.querySelectorAll('#element-ul li'));

//loop all bullets
for(var i=0; i<bullets.length; i++) {
    bullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();

function nextSlide() {
    if(nextBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
    
}
function prevSlide() {
    if(prevBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}
function theChecker() {
    slideNumber.textContent= 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    removeActive();
// set active class on current Slide
    sliderImgs[currentSlide - 1].classList.add('active');
// set active class on current element item
    elementNew.children[currentSlide - 1].classList.add('active');

    //check if current slide is the first
    if(currentSlide == 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }

      //check if current slide is the last
    if(currentSlide == slidesCount) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

function removeActive() {
    sliderImgs.forEach(function(img) {
        img.classList.remove('active');
    });

    bullets.forEach(function(bullet) {
        bullet.classList.remove('active');
    });
}