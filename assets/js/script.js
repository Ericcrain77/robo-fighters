var playerName = window.prompt("What is your robot's name?");
var playerHP = 100;
var playerStr = 10;

var enemyName = 'Roborto';
var enemyHP = 50;
var enemyStr = 12;

var fight = () => {
    // Alert that the game has started
    window.alert("Welcome to Robo Fighters!!");

    // prompt player if they want to fight next fight or skip it
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP'to choose.");

    // if player choses to fight, then fight
    if (promptFight === 'fight' || promptFight === 'FIGHT' || promptFight === 'Fight') {

        // Subtract playerStr from enemyHP
        enemyHP = enemyHP - playerStr;
        window.alert(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHP + " health remaining."
        );

        // check enemyHP
        if (enemyHP > 0) {
            window.alert(enemyName + " is still alive! They have " + enemyHP + " hit points left!");
        } else {
            window.alert(enemyName + " has died!");
        };

        // Subtract enemyStr from playerHP
        playerHP = playerHP - enemyStr;
        window.alert(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHP + " health remaining."
        );

        // check playerHP
        if (playerHP > 0) {
            window.alert(playerName + " is still alive! They have " + playerHP + " hit points left!");
        } else {
            window.alert(playerName + " has died!");
        };
    } else if (promptFight === 'skip' || promptFight === 'SKIP' || promptFight === 'Skip') {
        window.alert(playerName + " has chosen to skip their upcoming fight.");
    } else {
        window.alert("You need to choose a valid option. Try again");
    };
};

fight();