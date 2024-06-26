function receivesAFunction(returned) {
    return returned()
}

function returnsANamedFunction(nname){
    return function namedFunction() {
        return nname
    }
}

function returnsAnAnonymousFunction() {
    return  () => {}
}