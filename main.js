function adduser() {
    localStorage.setItem("player1", document.getElementById("player1").value);
    localStorage.setItem("player2", document.getElementById("player2").value);
    window.location = "game_page.html";
}
var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");
var score1 = 0;
var score2 = 0;
document.getElementById("player1").innerHTML = player1 + " :";
document.getElementById("player2").innerHTML = player2 + " :";
document.getElementById("player1score").innerHTML = score1;
document.getElementById("player2score").innerHTML = score2;

document.getElementById("question").innerHTML = "Question : " + player1;
document.getElementById("answer").innerHTML = "Answer : " + player2;
function send() {
    word = document.getElementById("word").value;
    word1 = word.toLowerCase();
    char1 = word1.charAt(1);
    console.log(char1);
    char2 = word1.charAt(word.length - 1);
    midlength = Math.floor(word1.length / 2);
    midchar = word1.charAt(midlength);
    removeChar1 = word1.replace(char1, "_");
    removeChar2 = removeChar1.replace(char2, "_");
    removeMidChar = removeChar2.replace(midchar, "-");
    var question = "<h4 id='display_word'>Q." + removeMidChar + "</h4>";
    var inputbox = "<br>Answer :<input id='checkbox'>";
    var button = "<br><button id='checkbutton' onclick='check()'>check</button>";
    var row = question + inputbox + button;
    document.getElementById("output").innerHTML = row;
}
var answerturn=player2;
var questionturn=player1;
function check() {
    var getanswer = document.getElementById("checkbox").value;
    var answer = getanswer.toLowerCase();
    if (word1 == answer) {

        if(answerturn=="player1"){
            score1=score1+1;
            document.getElementById("player1score").innerHTML=score1;
        }
        if(answerturn=="player2"){
            score2=score2+1;
            document.getElementById("player2score").innerHTML=score2;
        }
    }
    if(questionturn=="player1"){
        questionturn="player2";
        document.getElementById("question").innerHTML="Question Turn; "+player2;
    }
    if(questionturn=="player2"){
        questionturn="player1";
        document.getElementById("question").innerHTML="Question Turn; "+player1;
    }
    if(answerturn=="player1"){
        answerturn="player2";
        document.getElementById("answer").innerHTML="Answer Turn; "+player2;
    }
    if(answerturn=="player2"){
        answerturn="player1";
        document.getElementById("answer").innerHTML="Answer Turn; "+player1;
    }
    document.getElementById("output").innerHTML="";
    document.getElementById("checkbox").innerHTML="";
}