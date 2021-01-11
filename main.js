var gameData = {
    worms: 0,
    wormsPerClick: 1,
    wormsPerClickCost: 10
}

function digDirt() {
    gameData.worms += gameData.wormsPerClick
    document.getElementById("wormsDug").innerHTML = gameData.worms + " worms found"
}

function buyWormsPerClick() {
    if (gameData.worms >= gameData.wormsPerClickCost) {
        gameData.worms -= gameData.wormsPerClickCost
        gameData.wormsPerClick += 1
        gameData.wormsPerClickCost *= 2
        document.getElementById("wormsDug").innerHTML = gameData.worms + " worms found"
        document.getElementById("perClickUpgrade").innerHTML = "Upgrade shovel (Current Level " + gameData.wormsPerClick + ") Cost: " + gameData.wormsPerClickCost + " Worms"
    }
}

var mainGameLoop = window.setInterval(function() {
    digDirt()
    //document.getElementById("perClickUpgrade").style.display = "none"
}, 1000)

var sameGameLoop = window.setInterval(function() {
    localStorage.setItem("wormsGameSave", JSON.stringify(gameData))
}, 15000)

var sameGame = JSON.parse(localStorage.getItem("wormsGameSave"))
if (saveGame !== null) {
    gameData = saveGame
}