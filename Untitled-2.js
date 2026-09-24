document.write("<h3>1. 10 kolejnych liczb od 1</h3>");

for (var i = 3; i <= 12; i++) {
    document.write(i + " ");
}


document.write("<h3>2. 10 liczb od 10 malejąco</h3>");

for (var i = 15; i >= 6; i--) {
    document.write(i + " ");
}


document.write("<h3>3. Suma 10 kolejnych liczb</h3>");

var suma = 0;

for (var i = 3; i <= 12; i++) {
    suma += i;
}

document.write("3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 = " + suma);


document.write("<h3>4. 10 kolejnych liczb parzystych</h3>");

for (var i = 4; i <= 22; i += 2) {
    document.write(i + " ");
}


document.write("<h3>5. Odkładanie pieniędzy</h3>");

var X = 4;
var Y = 10;

document.write("X = " + X + " miesięcy<br>");
document.write("Y = " + Y + " zł miesięcznie<br>");
document.write("Odsetki = 6%<br><br>");

var kwota = 0;

for (var i = 1; i <= X; i++) {
    kwota += Y;
    kwota *= 1.06;
}

document.write("Kwota po " + X + " miesiącach = " + kwota.toFixed(2) + " zł");


document.write("<h3>6. Kwota zgromadzona przez pracownika</h3>");

document.write("Obliczenie: " + kwota.toFixed(2) + " zł");


document.write("<h3>7. Suma ciągu arytmetycznego</h3>");

var pierwszy = 4;
var roznica = 3;
var ile = 15;
var suma = 0;
var liczba = pierwszy;

document.write("Pierwszy element = " + pierwszy + "<br>");
document.write("Różnica = " + roznica + "<br>");
document.write("Liczba elementów = " + ile + "<br><br>");

for (var i = 1; i <= ile; i++) {
    suma += liczba;
    liczba += roznica;
}

document.write("Pierwsze elementy: 4, 7, 10, 13, 16...<br>");
document.write("Suma elementów = " + suma);


document.write("<h3>8. Piramida cegieł 5 x 5</h3>");

var cegly = 0;

for (var i = 5; i >= 1; i--) {
    cegly += i * i;
}

document.write("Podstawa = 5 x 5<br>");
document.write("Obliczenie: 5² + 4² + 3² + 2² + 1²<br>");
document.write("Liczba cegieł = " + cegly);


document.write("<h3>9. Liczba cegieł w ścianie</h3>");

var X = 12;
var Y = 5;
var Z = 2;

var sumaCegiel = 0;
var rzad = X;

document.write("X = " + X + " cegieł<br>");
document.write("Y = " + Y + " rzędów<br>");
document.write("Z = " + Z + " cegły mniej<br><br>");

for (var i = 1; i <= Y; i++) {
    document.write("Rząd " + i + ": " + rzad + " cegieł<br>");
    sumaCegiel += rzad;
    rzad -= Z;
}

document.write("<br>12 + 10 + 8 + 6 + 4 = " + sumaCegiel + " cegieł");


document.write("<h3>10. Waga ściany</h3>");

var K = 3;
var waga = sumaCegiel * K;

document.write("Liczba cegieł = " + sumaCegiel + "<br>");
document.write("Waga jednej cegły = " + K + " kg<br><br>");
document.write(sumaCegiel + " × " + K + " = " + waga + " kg");


document.write("<h3>11. Prosty kalkulator</h3>");

var a = 24;
var b = 6;
var znak = "-";
var wynik;

if (znak == "+") {
    wynik = a + b;
}
else if (znak == "-") {
    wynik = a - b;
}
else if (znak == "*") {
    wynik = a * b;
}
else if (znak == "/") {
    wynik = a / b;
}

document.write("a = " + a + "<br>");
document.write("b = " + b + "<br>");
document.write("Działanie = " + znak + "<br><br>");
document.write(a + " " + znak + " " + b + " = " + wynik);


document.write("<h3>12. Ciąg arytmetyczny</h3>");

var N = 8;
var X = 7;
var Y = 4;
var liczba = X;

document.write("N = " + N + "<br>");
document.write("X = " + X + "<br>");
document.write("Y = " + Y + "<br><br>");

document.write("Ciąg: ");

for (var i = 1; i <= N; i++) {
    document.write(liczba + " ");
    liczba += Y;
}


document.write("<h3>13. Suma dwóch liczb aż do uzyskania 0</h3>");

var a = 8;
var b = 5;
var suma = a + b;

document.write(a + " + " + b + " = " + suma + "<br>");

a = 11;
b = -11;
suma = a + b;

document.write(a + " + (" + b + ") = " + suma + "<br>");
document.write("Suma wynosi 0, więc pętla się kończy.");


document.write("<h3>14. Silnia</h3>");

var n = 7;
var silnia = 1;

for (var i = 1; i <= n; i++) {
    silnia *= i;
}

document.write("n = " + n + "<br>");
document.write("7! = 1 × 2 × 3 × 4 × 5 × 6 × 7 = " + silnia);


document.write("<h3>15. Ciąg kwadratów</h3>");

var n = 4;
var liczba = 3;

document.write("Liczba elementów = " + n + "<br>");
document.write("Pierwsza liczba = " + liczba + "<br><br>");

document.write("Ciąg: ");

for (var i = 1; i <= n; i++) {
    document.write(liczba + " ");
    liczba = liczba * liczba;
}


document.write("<h3>16. Suma i średnia 10 losowych liczb</h3>");

var suma = 0;

document.write("Wylosowane liczby: ");

for (var i = 1; i <= 10; i++) {
    var liczba = Math.floor(Math.random() * 31) + 20;
    document.write(liczba + " ");
    suma += liczba;
}

var srednia = suma / 10;

document.write("<br><br>");
document.write("Suma = " + suma + "<br>");
document.write("Średnia = " + srednia);
