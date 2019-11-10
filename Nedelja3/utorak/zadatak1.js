function max(a, b, c) {

    var max = a;

    if (b > max)
        max = b;
    if (c > max)
        max = c;

    return max;
}
console.log(max(3, 7, 10));