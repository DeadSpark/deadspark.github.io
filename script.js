window.onload = setInterval(() => {

    var randomInt = getRandomInt(6);

    if (randomInt == 0) {
        setCodeText("User");
    } else if (randomInt == 1) {
        setCodeText("Friend");
    } else if (randomInt == 2) {
        setCodeText("Programmer");
    } else if (randomInt == 3) {
        setCodeText("Coder");
    } else if (randomInt == 4) {
        setCodeText("Nerd");
    } else if (randomInt == 5) {
        setCodeText("Helper");
    }

}, 1000);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function setCodeText(nameString) {

    var codeText = document.getElementById("codeBoxCode");

    codeText.innerHTML = 
        "<br><br>" +
        "public class Welcome {<br><br>" +
        "&emsp;&emsp;public static void main(String[] args) {<br><br>" +
        "&emsp;&emsp;&emsp;System.out.println(\"Hello " + nameString + "\");<br><br>" +
        "&emsp;&emsp;}<br><br>" +
        "}" +
        "<br><br>";
        
}