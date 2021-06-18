somar(10)
function somar() {

    var multiplos3 = 0;
    var multiplos5 = 0;

    for (i = 0; i <= 1000; i++) {


        multiplos3 += (i % 3 == 0) ? i : 0;
        multiplos5 += (i % 5 == 0) ? i : 0;

    }
document.write(multiplos3 + multiplos5)
}