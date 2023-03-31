player1name = localStorage.getItem("p1name")
player2name = localStorage.getItem("p2name")

player1score = 0;
player2score = 0;

question_turn = "p1";
answer_turn = "p2";

actual_answer = 0;

console.log(player1name)
document.getElementById("pl1name").innerHTML = player1name + ": ";
document.getElementById("pl2name").innerHTML = player2name + ": ";
document.getElementById("p1score").innerHTML = player1score;
document.getElementById("p2score").innerHTML = player2score;

document.getElementById("Qturn").innerHTML = "Question Turn: " + player1name
document.getElementById("Aturn").innerHTML = "Answer Turn: " + player2name

function send() {

    number1 = document.getElementById("n1").value;
    number2 = document.getElementById("n2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_number + input_box + check_button ;
 
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

function check() {

    console.log
    (actual_answer)

    get_answer=document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "p1")
        {
            player1score = player1score + 1;
            document.getElementById("p1score").innerHTML = player1score;
        }
        else
        {
            player2score = player2score + 1;
            document.getElementById("p2score").innerHTML = player2score;
        }
    }

    if(question_turn == "p1")
    {
        question_turn = "p2";
        document.getElementById("Qturn").innerHTML = "Question Turn: " + player2name;
    }
    else
    {
        question_turn = "p1";
        document.getElementById("Qturn").innerHTML = "Question Turn: " + player1name;
    }

    if(answer_turn == "p1")
    {
        answer_turn = "p2";
        document.getElementById("Aturn").innerHTML = "Answer Turn: " + player2name;
    }
    else
    {
        answer_turn = "p1";
        document.getElementById("Aturn").innerHTML = "Answer Turn: " + player1name;
    }

    document.getElementById("output").innerHTML = ""
}