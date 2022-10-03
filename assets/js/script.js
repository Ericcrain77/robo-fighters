var playerName = window.prompt("What is your robot's name?");
var playerHP = 100;
var playerStr = 10;

var enemyName = 'Roborto';
var enemyHP = 50;
var enemyStr = 12;

// check playerHP
if (playerHP > 0) {
    window.alert(playerName + " is still alive! They have " + playerHP + " hit points left!");
} else {
    window.alert(playerName + " has died!");
};

// check enemyHP
if (enemyHP > 0) {
    window.alert(enemyName + " is still alive! They have " + enemyHP + " hit points left!");
} else {
    window.alert(enemyName + " has died!");
};


var fight = () => {
    // Alert that the game has started
    window.alert("Welcome to Robo Fighters!!");

    // Subtract playerStr from enemyHP
    enemyHP = enemyHP - playerStr;
    window.alert(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHP + " health remaining."
    );

    // Subtract enemyStr from playerHP
    playerHP = playerHP - enemyStr;
    window.alert(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHP + " health remaining."
    );

};

fight();