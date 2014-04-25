/* Reference data */
var symbols = ["M", "D", "C", "L", "X", "V", "I"];
var values  = [1000, 500, 100, 50, 10, 5, 1];

var intToNumeral = function(n) {

    /* Catch edge cases */
    if (n === "" || isNaN(n)) {
        return;
    } else if (n < 1 || n > 9999) {
        return;
    }

    var stringOut = "";

    /* Loop through values and build up stringOut */
    for (var i = 0; i < symbols.length; i++) {

        /* How many times does the symbol occur? */
        var occurrences = Math.floor(n/values[i]);

        if (occurrences === 0) {
            continue;
        }

        /* Build up output string */
        for (var j = 0; j < occurrences; j++) {
            stringOut += symbols[i];
        }

        /* Decrement n to avoid double-counting */
        n -= values[i] * occurrences;
    }

    /* Change from verbose output to succinct output */

    /* Handle cases with nines. */
    stringOut = stringOut.replace("DCCCC", "CM");
    stringOut = stringOut.replace("LXXXX", "XC");
    stringOut = stringOut.replace("VIIII", "IX");
    /* Handle cases with fours. */
    stringOut = stringOut.replace("CCCC",  "CD");
    stringOut = stringOut.replace("XXXX",  "XL");
    stringOut = stringOut.replace("IIII",  "IV");

    return stringOut;
};

var numeralToInt = function(x) {

    /* Catch edge cases */
    if (x === "" || !isNaN(x)) {
        return;
    }

    /* Convert to uppercase */
    x = x.toUpperCase();

    /* Loop through and look for illegal characters */
    for (var i = 0; i < x.length; i++) {
        if (symbols.indexOf(x[i]) === -1) {
            return;
        }
    }

    /* Track the total with this variable */
    var numberOut = 0;

    var previousValue = 0;

    /* Work through string backwards */
    for (var j = x.length-1; j >= 0; j--) {
        var index = symbols.indexOf(x[j]);
        var value = values[index];

        if (value >= previousValue) {
            numberOut += value;
            previousValue = value;
        } else {
            numberOut -= value;
        }
    }

    return numberOut;
};

$(document).ready(function() {

    var $numIn = $("#numberIn");
    var $numOut = $("#numeralOut");

    $numIn.val("2014");
    $numOut.val("MMXIV");

    $numIn.on('input', function() {
        var numberIn = $numIn.val();
        var numeralOut = intToNumeral(numberIn);

        $numOut.val(numeralOut);

    });

    $numOut.on('input', function() {
        var numeralIn = $numOut.val();
        var numberOut = numeralToInt(numeralIn);
        var numeralOut = intToNumeral(numberOut);

        $numIn.val(numberOut);
        $numOut.val(numeralOut);
    });

});