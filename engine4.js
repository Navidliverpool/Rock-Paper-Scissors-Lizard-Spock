function rpsls(pl1, pl2) {
    console.log(pl1, ", ", pl2)
    let plWon;
    if (pl1 == pl2) {
        return "Draw!";
    }
    switch (true) {
        case (pl1 == "rock"):
            {
                console.log("1")
                if (pl2 == "lizard" || pl2 == "scissors") {
                    console.log("11")
                    plWon = "Player 1 Won!";
                } else {
                    plWon = "Player 2 Won!";
                }
            }
            break;
        case (pl1 == "paper"):
            {
                console.log("2")
                if (pl2 == "rock" || pl2 == "spock") {
                    console.log("22")
                    plWon = "Player 1 Won!";
                } else {
                    plWon = "Player 2 Won!";
                }
            }
            break;
        case (pl1 == "scissors"):
            {
                console.log("3")
                if (pl2 == "paper" || pl2 == "lizard") {
                    console.log("33")
                    plWon = "Player 1 Won!";
                } else {
                    plWon = "Player 2 Won!";
                }
            }
            break;
        case (pl1 == "lizard"):
            {
                console.log("4")
                if (pl2 == "paper" || pl2 == "spock") {
                    console.log("44")
                    plWon = "Player 1 Won!";
                } else {
                    plWon = "Player 2 Won!";
                }
            }
            break;
        case (pl1 == "spock"):
            {
                console.log("5")
                if (pl2 == "scissors" || pl2 == "rock") {
                    console.log("55")
                    plWon = "Player 1 Won!";
                } else {
                    plWon = "Player 2 Won!";
                }
            }
            break;
    }
    console.log(plWon)
    return plWon;
}

rpsls("paper", "lizard")