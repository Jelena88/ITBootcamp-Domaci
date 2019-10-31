

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= (5 - i); j++)
        document.write("\xa0\xa0")
    for (k = 1; k <= i; k++) 
        document.write("#")
        document.write(" ")
    for(j=1; j <=i; j++)
        document.write("#")
        document.write("<br>");

}
