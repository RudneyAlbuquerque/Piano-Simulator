 const pianokeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysChecked = document.querySelector(".keys-check input")

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();
    
    console.log(mapedKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150); 
};

//let imgage = new Image();

pianokeys.forEach( (key) => {
    key.addEventListener('click', (e) => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
 });

 document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)) return playTune(e.key);
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianokeys.forEach(key => key.classList.toggle("hide"));
}

volumeSlider.addEventListener('input', handleVolume);
keysChecked.addEventListener('click', showHideKeys);