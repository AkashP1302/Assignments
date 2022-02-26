function checkPalindrome(str) {

   
    var len = string.length;

    
    for (var i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return document.write( 'It is not a palindrome');
        }
    }
    return document.write( 'It is a palindrome');
}
var string = prompt('Enter a string: ');
var value = checkPalindrome(string);

