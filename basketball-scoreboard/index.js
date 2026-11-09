let score1 = 0
let score2 = 0

let scoreTeam1 = document.getElementById("score-team-1")
let scoreTeam2 = document.getElementById("score-team-2")

scoreTeam1.textContent = score1
scoreTeam2.textContent = score2

function updateColors() {
    if (score1 > score2) {
        scoreTeam1.className = "scorebox winning"
        scoreTeam2.className = "scorebox"
    } else if (score2 > score1) {
        scoreTeam1.className = "scorebox"
        scoreTeam2.className = "scorebox winning"
    } else {
        scoreTeam1.className = "scorebox"
        scoreTeam2.className = "scorebox"
    }
}

function add(team, num) {
    if (team === 1) {
        score1 += num
        scoreTeam1.textContent = score1
    } else {
        score2 += num
        scoreTeam2.textContent = score2
    }
    updateColors()    
}

function reset() {
    score1 = 0
    score2 = 0
    scoreTeam1.textContent = score1
    scoreTeam2.textContent = score2
    updateColors()
}