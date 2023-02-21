function rpsls(pl1, pl2) {
    const pl1Won = "Player 1 Won!";
    const pl2Won = "Player 2 Won!";
    if (pl1 == pl2) {
        return "Draw!";
    }
    switch (true) {
        case (pl1 == "rock"):
            {
                if (pl2 == "lizard" || pl2 == "scissors") {
                    return pl1Won;
                }
            }
            break;
        case (pl1 == "paper"):
            {
                if (pl2 == "Rock" || pl2 == "Spock") {
                    return pl1Won;
                }
            }
            break;
        case (pl1 == "scissors"):
            {
                if (pl2 == "paper" || pl2 == "lizard") {
                    return pl1Won;
                }
            }
            break;
        case (pl1 == "spock"):
            {
                if (pl2 == "scissors" || pl2 == "Rock") {
                    return pl1Won;
                }
            }
            break;
        default:
            return pl2Won;
    }
}

rpsls("rock", "scissors")