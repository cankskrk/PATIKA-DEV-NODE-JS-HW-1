const arguments = process.argv[2]

const Alan = (r) => {
    const pi = 3.14
    let a = pi * (r ** 2)
    return console.log(a)
}

Alan(arguments[0] * 1)