module.exports = function toReadable(number) {
    if (number === 0) {
        return "zero";
    }
    let str = "";
    let dictionary = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let dictionary2 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if ((number + "").length == 3) {
        str = threeNum(number);
    } else if ((number + "").length == 2) {
        if (number < 20) {
            str = oneNum(number);
        } else {
            str = twoNum(number);
        }
    } else if ((number + "").length == 1) {
        str = oneNum(number);
    }

    function oneNum(num) {
        // от 0 до 19
        return dictionary[num];
    }
    function twoNum(num) {
        // от 20 и до 99
        let first = dictionary2[Math.trunc(num / 10)];
        let second = num % 10 ? dictionary[num % 10] : "";
        return `${first} ${second}`.trim();
    }

    function threeNum(num) {
        // от 100 до 999
        let hundreds = Math.trunc(num / 100);
        let ten = num % 100;
        let one = Math.trunc((num % 100) / 10);
        if (ten > 19) {
            return (
                `${oneNum(hundreds)} hundred ${twoNum(ten)}`.trimRight().trimRight()
            );
        }
        return `${oneNum(hundreds)} hundred ${oneNum(ten)}`.trimRight();
    }
    return str;
};
