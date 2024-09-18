var el = document.getElementById('myImg'),
    myImgs = [
        'photo2.jpg',
        'photo3.jpg',
        'photo4.jpg',
        'photo5.jpg',
    ];

function changeImg(el, myImgs) {

    setInterval(function() {

        myRandomNum = Math.floor(Math.random() * myImgs.length);

        el.src = myImgs[myRandomNum];
    },1000);
}

changeImg(el, myImgs);