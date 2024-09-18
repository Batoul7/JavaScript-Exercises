let allSpans = document.querySelectorAll('.buttons span');
let results = document.querySelector(".results > span");
let theInput = document.getElementById("the-input");

allSpans.forEach(span => {

    span.addEventListener("click", (e) => {
        
        if(e.target.classList.contains('check')) {
            checkItem();
        }
        if(e.target.classList.contains('add')) {
            addItem();
        }
        if(e.target.classList.contains('delete')) {
            deleteItem();
        }
        if(e.target.classList.contains('show')) {
            showItems();
        }
    })
})

function showMessage() {
    results.innerHTML= 'input cant be empty';
}

function checkItem() {
    
    if(theInput.value !== '') {

        if(localStorage.getItem(theInput.value)) {
            results.innerHTML = `found local item called <span>${theInput.value}</span>`;
        } else {
            results.innerHTML = `NO local storage item with the name <span>${theInput.value}</span>`;
        }
    } else {
        showMessage();
    }
}

function addItem() {
    if(theInput.value !== '') {
        localStorage.setItem(theInput.value, 'Test');
        results.innerHTML = `Local Storage Item <span>${theInput.value}</span> Added`;
        theInput.value = '';
    } else {
        showMessage();
    }
}

function deleteItem() {

    if(theInput.value !== '') {

        if(localStorage.getItem(theInput.value)) {
            localStorage.removeItem(theInput.value);
            results.innerHTML = `Local Storage item called <span>${theInput.value}</span> Deleted`;
            theInput.value = '';
        } else {
            results.innerHTML = `NO local storage item with the name <span>${theInput.value}</span>`;
        }

    } else {
        showMessage();
    }
}

function showItems() {

    if(localStorage.length) {
        results.innerHTML = '';
        for(let [key, value] of Object.entries(localStorage)) {
            results.innerHTML += `<span class="key">${key} => ${value} </span>`
        }
    } else {
        results.innerHTML = `Local Storage Is Empty`;
    }
}