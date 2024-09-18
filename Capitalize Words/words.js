function capitaleLetter(string) {
    var oldArr = string.split(' '),
        newArr = [];
    
    for (var i=0; i < oldArr.length; i++) {
        newArr.push (oldArr[i].charAt(0).toUpperCase() + oldArr[i].slice(1));
    }
    result = newArr.join(' '); // return newArr.join(' ')
    console.log(result);
}