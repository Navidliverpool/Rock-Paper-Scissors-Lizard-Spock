function rpsls(pl1, pl2) {
    //Your Magnificent Code here
    let count1 = 0;
    let count2 = 0;
    let one = "Player 1 Won!";
    console.log("pl1 is: ", pl1, ", ", "pl2 is:", pl2)
    switch (pl1) {
        case "rock":
            if (pl2 == "lizart" || pl2 == "scissors") {
                console.log("first if")
                return one;
            } else {
                return "Player 2 Won!";
            }
            break;
        case "paper":
            if (pl2 == "rock" || pl2 == "spock") {
                console.log("second if")
                    // count1++;
                return "Player 1 Won!";
            } else {
                return "Player 2 Won!";
            }
            break;
        case "scissors":
            if (pl2 == "paper" || pl2 == "lizard") {
                console.log("third if")
                    // count1++;
                return "Player 1 Won!";
            } else {
                return "Player 2 Won!";
            }
            break;
        case "lizard":
            if (pl2 == "spock" || pl2 == "paper") {
                count1++;
            } else {
                return "Player 2 Won!";
            }
            break;
        case "spock":
            if (pl2 == "scissors" || pl2 == "rock") {
                // count1++;
                return "Player 1 Won!";
            } else {
                return "Player 2 Won!";
            }
            break;
    }
    console.log("inja")
}

rpsls("rock", "lizart")