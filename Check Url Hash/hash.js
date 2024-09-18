// hash ###
if (window.location.hash) {

    var hash = window.location.hash.substring(1);
    
    if(hash === 'osama') { // 0 = #
        console.log('good osama');
    } else {
        console.log('bad no osama');
    }
}