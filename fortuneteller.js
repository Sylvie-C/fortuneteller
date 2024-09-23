const replies = [ 
  "My sources say Yes" , "My sources say No" ,  
  "You need to wait a little longer" , "It’s not the most important thing right now" , 
  "The future is uncertain here; anything is still possible" , 
  "Return to the essentials: your happiness" , "Better days await you" , 
  "A happy outcome awaits you soon" , "Difficulties are to be expected" , 
  "Be on your guard, don’t lose courage" , "Relax, friendly forces are with you"
]

const textContainer = document.querySelector(".ftTextContainer")
const ftTextContent = document.querySelector(".ftTextContent")
const resultBtn = document.querySelector(".ftResultBtn")
const replayBtn = document.querySelector(".ftReplayBtn")


function playAnswer () {
  textContainer.style.width = "200px"
  textContainer.style.height = "200px"
  textContainer.style.borderRadius = "50%"

  resultBtn.style.opacity = "0"

  ftTextContent.style.transform = "scale(0)"
  ftTextContent.style.opacity = "0"

  setTimeout ( () => {
    textContainer.style.boxShadow = "white 0 0 50px"

    const number = Math.floor(Math.random() * replies.length)
    const resultText = replies[number]
    ftTextContent.textContent = resultText

    ftTextContent.style.opacity = "1"
    ftTextContent.style.transform = "scale(1)"
  } , 3000)

}

resultBtn.addEventListener ("click" , 
  () => { 
    playAnswer() 
    replayBtn.classList.toggle("hideBtn")
  }
)

replayBtn.addEventListener ("click" , 
  () => { 
    playAnswer() 
  }
)