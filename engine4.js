function rpsls(pl1, pl2) {
    console.log(pl1, ", ", pl2)
    let plWon;
    if (pl1 == pl2) {
        return "Draw!";
    }
    switch (true) {
        case (pl1 == "rock"):
            {
                if (pl2 == "lizard" || pl2 == "scissors") {
                    plWon = "Player 2 Won!";
                } else {
                    plWon = "Player 1 Won!";
                }
            }
            break;
        case (pl1 == "paper"):
            {
                if (pl2 == "Rock" || pl2 == "Spock") {
                    plWon = "Player 2 Won!";
                } else {
                    plWon = "Player 1 Won!";
                }
            }
            break;
        case (pl1 == "scissors"):
            {
                if (pl2 == "paper" || pl2 == "lizard") {
                    plWon = "Player 2 Won!";
                } else {
                    plWon = "Player 1 Won!";
                }
            }
            break;
        case (pl1 == "lizard"):
            {
                if (pl2 == "paper" || pl2 == "spock") {
                    plWon = "Player 2 Won!";
                } else {
                    plWon = "Player 1 Won!";
                }
            }
            break;
        case (pl1 == "spock"):
            {
                if (pl2 == "scissors" || pl2 == "Rock") {
                    plWon = "Player 2 Won!";
                } else {
                    plWon = "Player 1 Won!";
                }
            }
            break;
    }
    console.log(plWon)
    return plWon;
}

rpsls("rock", "lizard")