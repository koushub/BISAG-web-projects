let words = [
    {
        word: "hello",
        hint: "A common greeting"
    },
    {
        word: "goodbye",
        hint: "A common farewell"
    },
    {
        word: "sunshine",
        hint: "Bright and warm light from the sky"
    },
    {
        word: "ocean",
        hint: "Vast body of saltwater"
    },
    {
        word: "mountain",
        hint: "Tall landform with peaks and slopes"
    },
    {
        word: "breeze",
        hint: "Gentle wind"
    },
    {
        word: "chocolate",
        hint: "Sweet brown treat"
    },
    {
        word: "rainbow",
        hint: "Colorful arch in the sky"
    },
    {
        word: "guitar",
        hint: "Stringed musical instrument"
    },
    {
        word: "umbrella",
        hint: "Provides shelter from rain"
    },
    {
        word: "elephant",
        hint: "Large mammal with tusks and trunk"
    },
    {
        word: "pizza",
        hint: "Popular Italian dish"
    },
    {
        word: "sunset",
        hint: "Dusk, the time when the sun disappears"
    },
    {
        word: "butterfly",
        hint: "Colorful insect with wings"
    },
    {
        word: "library",
        hint: "Place with books and reading materials"
    },
    {
        word: "computer",
        hint: "Electronic device for processing data"
    },
    {
        word: "astronaut",
        hint: "Person trained for space travel"
    },
    {
        word: "bicycle",
        hint: "Two-wheeled human-powered vehicle"
    },
    {
        word: "telephone",
        hint: "Communication device with wires"
    },
    {
        word: "fireworks",
        hint: "Explosive displays of light and color"
    }
];

const wordText = document.querySelector(".word"),
    hintText = document.querySelector(".hint span"),
    timeText = document.querySelector(".time b"),
    inputField = document.querySelector("input"),
    refreshBtn = document.querySelector(".refresh-word"),
    checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord)
    return alert("Please enter a word!");

    if(userWord != correctWord)
    return alert(`${userWord}" is not a correct word!`);

    else {
        return alert(`Congrats!!! ${correctWord.toUpperCase()} is the correct word`);
        
    }
}

initTimer = (maxTime) => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0){
            maxTime--;
            return (timeText.innerText = maxTime);
        }
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame();
        clearInterval(timer);
    },1000)
}

const initGame = () => {
    initTimer(30);
    let randomObjIndex = Math.floor(Math.random() * words.length);
    let wordArray = words[randomObjIndex].word.split("");
    for(let i = wordArray.length-1; i > 0; i--){
       let j = Math.floor(Math.random() * (i+1));
       [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
        
    wordText.innerHTML = wordArray.join("");
    hintText.innerHTML = words[randomObjIndex].hint;
    correctWord = words[randomObjIndex].word.toLowerCase();
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
}

initGame();
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);