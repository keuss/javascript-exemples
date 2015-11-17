module.exports = function() {
    var args;
    if(arguments[0] instanceof Array) {
        args = arguments[0];
    } else {
        args = arguments; 
    }
    var counter = 0;
    for(var i=0; i<args.length; i++) {
        if(!args[i]) counter++;
    }
    return counter;
}