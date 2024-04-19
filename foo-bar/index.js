const num = 100

const isPrimeNum = (num) => {
    if (num <= 1) return false // Bukan bilangan Prima
    if (num === 2) return true // 2 Bilangan Prima
    if (num % 2 === 0) return false // Genap dan bukan bilangan 2 bukan Prima

    for(let i = 2 ; i < num ; i++) {
        if(num % i === 0) {
            return false
        }
    }
    
    return true
} 

const fooBar = (maxNum)  => {
    const output = []
    
    for(let i = maxNum ; i >= 1 ; i--) {
        const num = i

        if(isPrimeNum(num)) continue
        if(num % 3 === 0 && num % 5 === 0 ) output.push('FooBar')
        else if(num % 3 === 0) output.push('Foo')
        else if(num % 5 === 0) output.push('Bar')
        else output.push(num)
    }

    return output
}

const formattedLogs = fooBar(num).join(', ')

console.log(formattedLogs) // Bar, Foo, 98, Foo, Bar, 94, Foo, 92, 91, FooBar, 88, Foo, 86, Bar, Foo, 82, Foo, Bar, Foo, 77, 76, FooBar, 74, Foo, Bar, Foo, 68, Foo, Bar, 64, Foo, 62, FooBar, 58, Foo, 56, Bar, Foo, 52, Foo, Bar, 49, Foo, 46, FooBar, 44, Foo, Bar, Foo, 38, Foo, Bar, 34, Foo, 32, FooBar, 28, Foo, 26, Bar, Foo, 22, Foo, Bar, Foo, 16, FooBar, 14, Foo, Bar, Foo, 8, Foo, 4, 1
