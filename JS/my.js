var a, b, c, s;

function calc(a, b, c) {
    var p;
    p = (a + b + c) / 3;
    return Math.sqrt (p * (p - a) * (p - b) * (p - c));
}

// 1
a = 3, b = 4, c = 5;
console.log (calc(a, b, c));

// 2 
a = 11, b = 15, c = 13;
console.log (calc(a, b, c));

// 3 
a = 101, b = 215, c = 163;
console.log (calc(a, b, c));
