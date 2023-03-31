function adduser(){
    player1 = document.getElementById("p1input").value
    player2 = document.getElementById("p2input").value

    localStorage.setItem("p1name", player1)
    localStorage.setItem("p2name", player2)

    window.location = "quiz_game_page.html"
} 