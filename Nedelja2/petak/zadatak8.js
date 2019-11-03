var n = 6;
for (let i=1; i<=n; i++){
    let red = '#'.repeat(i-1)
    let red2 =' '.repeat(n-i)
    console.log(red2 + red);
}