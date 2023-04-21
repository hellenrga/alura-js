var list = [10, 1, 5, 9, 8, 12, 15]

console.log(list.sort())

function comparaNumeros(a,b) { 
    if (a == b) return 0; 
        if (a < b) return -1; 
            if (a > b) return 1; }

console.log(list.sort(comparaNumeros))

console.log(list.sort((a, b) => a -b));