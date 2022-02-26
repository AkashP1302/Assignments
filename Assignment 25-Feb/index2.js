var a = prompt("Enter a First String ");
var b = prompt("Enter a Second String ");

function anagram(a,b) {
    // var a = "abba";
    // var b = "bbava";

    len1 = a.length;
    // console.log(len1);
    len2 = b.length;
    // console.log(len2);

    if (len1 == len2) {
        let str1 = a.split('').sort().join('');
        let str2 = b.split('').sort().join('');
        if (str1 === str2) {
            document.write("True");
        }

    } else {
        document.write("false");
    }
}
anagram(a,b);