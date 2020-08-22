var highScores = document.querySelector("#high-score");
var backBtn = document.querySelector("#go-back");
var storeScores = localStorage.getItem("storeScores");
storeScores = JSON.parse(storeScores);
if (storeScores !== null) {
    for (var i = 0; i < storeScores.length; i++) {
        var scoresList = document.createElement("li");
        scoresList.textContent = storeScores[i].initials + " " + storeScores[i].score;
        highScores.appendChild(scoresList);
    }
}

backBtn.addEventListener("click", function(){
    window.location.replace("./index.html");
})