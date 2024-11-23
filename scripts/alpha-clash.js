// function play(){
//     const homeSection = document.getElementById('home');
//     homeSection.classList.add('hidden')

//     const playGroundSection = document.getElementById('play-ground')
//     // console.log(playGroundSection.classList)
//     playGroundSection.classList.remove('hidden')
    
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key
    console.log('player pressed',playerPressed)

    if(playerPressed === 'Escape'){
        gameOver()
    }

    const currentAlphabetElement = document.getElementById('current-alphabet')
    const currentAlphabet = currentAlphabetElement.innerText
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    if(playerPressed === expectedAlphabet){
        console.log('You will get a point')
        // // console.log('You have pressed correctly', expectedAlphabet)
        // const currentScoreElement= document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)
        // const newScore = currentScore + 1
        // currentScoreElement.innerText = newScore
        // // console.log(newScore)
        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1
        setTextElementValueById('current-score', updatedScore)


        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('You missed!,  You lost a life')

        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1
        setTextElementValueById('current-life', updatedLife)
        
        if(updatedLife === 0){
            gameOver()
        }



        // const currenLifeElement = document.getElementById('current-life')
        // const currentLifeText = currenLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1
        // currenLifeElement.innerText = newLife
        // if(newLife === 0){
        //     gameOver();
        // }
    }

}
document.addEventListener('keyup', handleKeyboardButtonPress)


function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('Your alphabet number is',alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;

    setBackgroundColorById(alphabet)

}

function  play(){
    hiddenElementById('home');
    hiddenElementById('score')
    showElementById('play-ground');
    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame();

}

function gameOver(){
    hiddenElementById('play-ground')
    showElementById('score')

    const lastScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score', lastScore)
    const currentAlphabet = getElementTextById('current-alphabet')
    removeBackgroundColorById(currentAlphabet);
}