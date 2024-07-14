function makeBubble () {
    let clutter = ""

for (let i = 1; i<169; i++ ) {
    let rn = Math.floor(Math.random()*10)
    clutter+= `<div class="bubble">${rn}</div>`
}

document.getElementById("pbott").innerHTML = clutter
}
let timer = 20
let score = 0
let hitRn = 0

function incScore() {
    score += 10
    document.getElementById("scoreval").textContent = score
}

function getNewHit(){
    let rn = Math.floor(Math.random()*10)
    hitRn = rn
     document.getElementById("hitval").textContent = rn
}

function runTimer(){
    let timerint = setInterval(function(){
        if (timer > 0){
            timer--
        document.getElementById("timervalue").textContent = timer
        } else {
            clearInterval(timerint)
            document.getElementById("pbott").innerHTML = `<h1>Game over</h1>`
        }
        
    }, 1000)
}  

document.getElementById("pbott").addEventListener("click", function(dets){
    let clickNum = Number(dets.target.textContent)
    if (clickNum === hitRn) {
        incScore()
        makeBubble()
        getNewHit()
    }
})

runTimer()
makeBubble()
getNewHit()
