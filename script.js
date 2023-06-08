//initial character declarations
var alphabet_l = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var alphabet_u = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specialChr = ["!", "@", "#", "$", "%", "&", "*", "?"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//principal function
function Generate() {

    var password = {
        // Default Settings
        lowercase: true,
        uppercase: false,
        numeric: false,
        special: false,
        //methods for user inputs
        changeupper: function(){
            this.uppercase = !this.uppercase
        },
        changelower: function(){
            this.lowercase = !this.lowercase
        },
        changenumeric: function(){
            this.numeric = !this.numeric
        },
        changespecial: function(){
            this.special = !this.special
        }
    }
    //intro
    alert("Hey! Are you ready to generate a password?");

    //prompts for user input
    var uppercase = prompt("Would you like uppercase characters in your password? (Please enter T or F)")
    if (uppercase==="T") {
        password.changeupper()
    }

    var lowercase = prompt("Would you like lowercase characters in your password? (Please enter T or F)")
    if (lowercase==="F") {
        password.changelower()
    }

    var numeric = prompt("Would you like numeric characters in your password? (Please enter T or F)")
    if (numeric==="T") {
        password.changenumeric()
    }

    var special = prompt("Would you like special characters in your password? (Please enter T or F)")
    if (special==="T") {
        password.changespecial()
    }

    var plen = prompt("How long do you want your password to be? (Please enter a number from 8-128)")
    
    //string to int conversion
    plen = parseInt(plen)
    var pword_string = ""
    var index = 0

    //password generation Loop
    while (true) {
        if (!password.uppercase && !password.lowercase && !password.numeric && !password.special) {
            alert("You need to have at least one type of character to generate a password")
            break
        }

        if (password.lowercase) {
            if (Math.random()>=.7) {
                //index randomiser
                index = Math.floor(Math.random()*alphabet_l.length)
                pword_string = pword_string + alphabet_l[index]
                console.log(pword_string)
            }
            
        }
        //break condition
        if (pword_string.length>=plen) {
            break
        }
        if (password.uppercase) {
            if (Math.random()>=.5) {
                index = Math.floor(Math.random()*alphabet_u.length)
                pword_string = pword_string + alphabet_u[index]
                console.log(pword_string)
            }
        }
        if (pword_string.length>=plen) {
            break
        }
        if (password.numeric) {
            if (Math.random()>=.6) {
                index = Math.floor(Math.random()*numbers.length)
                pword_string = pword_string + numbers[index]
                console.log(pword_string)
            }
        }
        if (pword_string.length>=plen) {
            break
        }
        if (password.special) {
            if (Math.random()>=.5) {
                index = Math.floor(Math.random()*specialChr.length)
                pword_string = pword_string + specialChr[index]
                console.log(pword_string)
            }
        }
        if (pword_string.length>=plen) {
            break
        }
    }
    //transmission of password
    alert("Here is your password!!\n" + pword_string)
 }

