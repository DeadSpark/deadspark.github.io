window.onload = setInterval(() => {

    var randomInt = getRandomInt(11);

    switch (randomInt) {
        case 0:
            setCodeText("Hello User welcome to hell");
            break;
        case 1:
            setCodeText("Hey Friend");
            break;
        case 2:
            setCodeText("Hola Programmer");
            break;
        case 3:
            setCodeText("Welcome Amigo");
            break;
        case 4:
            setCodeText("You here for code?");
            break;
        case 5:
            setCodeText("I was expecting you");
            break;
        case 6:
            setCodeText("We are no strangers to code");
            break;
        case 7:
            setCodeText("Arent you popular to be here");
            break;
        case 9:
            setCodeText("Welcome to welcoming place")
            break;
        case 10:
            setCodeText("Happy faces and shoe laces");
            break;
    
        default:
            setCodeText("Welcome");
            break;
        
    }

}, 1000);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setCodeText(outputString) {

    var codeText = document.getElementById("codeBoxCode");

    codeText.innerHTML = 
        "<br><br>" +
        "public class Welcome {<br><br>" +
        "&emsp;&emsp;public static void main(String[] args) {<br><br>" +
        "&emsp;&emsp;&emsp;System.out.println(\"" + outputString + "\");<br><br>" +
        "&emsp;&emsp;}<br><br>" +
        "}" +
        "<br><br>";
        
}

function redirectWyr() {
    window.location = "https://www.spigotmc.org/resources/would-you-rather.89635/";
}

function redirectBbt() {
    window.location = "https://www.spigotmc.org/resources/betterbedtime.76142/";
}

function redirectGa() {
    window.location = "https://www.spigotmc.org/resources/guardianangel.76988/";
}