// get elements for the buttons
const boomButton = document.getElementById("boomButton");
const clapButton = document.getElementById("clapButton");
const hihatButton = document.getElementById("hihatButton");
const kickButton = document.getElementById("kickButton");
const openhatButton = document.getElementById("openhatButton");
const rideButton = document.getElementById("rideButton");
const snareButton = document.getElementById("snareButton");
const tinkButton = document.getElementById("tinkButton");
const tomButton = document.getElementById("tomButton");

// get elements for the audio files
const boomSound = document.getElementById("boomSound")
const clapSound = document.getElementById("clapSound")
const hihatSound = document.getElementById("hihatSound")
const kickSound = document.getElementById("kickSound")
const openhatSound = document.getElementById("openhatSound")
const rideSound = document.getElementById("rideSound")
const snareSound = document.getElementById("snareSound")
const tinkSound = document.getElementById("tinkSound")
const tomSound = document.getElementById("tomSound")

boomButton.addEventListener("click", () => 
{
    // each time button is pressed reset playback to 0seconds
    boomSound.currentTime = 0;
    // play the sound associated with boom button
    boomSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '1')
    {
        boomSound.currentTime = 0;
        boomSound.play()
    }
    
})

clapButton.addEventListener("click", () => 
{
    clapSound.currentTime = 0;
    clapSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '2')
    {
        clapSound.currentTime = 0;
        clapSound.play()
    }
    
})

hihatButton.addEventListener("click", () => 
{
    hihatSound.currentTime = 0;
    hihatSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '3')
    {
        hihatSound.currentTime = 0;
        hihatSound.play()
    }
    
})

kickButton.addEventListener("click", () => 
{
    kickSound.currentTime = 0;
    kickSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '4')
    {
        kickSound.currentTime = 0;
        kickSound.play()
    }
    
})

openhatButton.addEventListener("click", () => 
{
    openhatSound.currentTime = 0;
    openhatSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '5')
    {
        openhatSound.currentTime = 0;
        openhatSound.play()
    }
    
})

rideButton.addEventListener("click", () => 
{
    rideSound.currentTime = 0;
    rideSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '6')
    {
        rideSound.currentTime = 0;
        rideSound.play()
    }
    
})

snareButton.addEventListener("click", () => 
{
    snareSound.currentTime = 0;
    snareSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '7')
    {
        snareSound.currentTime = 0;
        snareSound.play()
    }
    
})

tinkButton.addEventListener("click", () => 
{
    tinkSound.currentTime = 0;
    tinkSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '8')
    {
        tinkSound.currentTime = 0;
        tinkSound.play()
    }
    
})

tomButton.addEventListener("click", () => 
{
    tomSound.currentTime = 0;
    tomSound.play()
})

document.addEventListener("keydown", (event) =>
{
    let key = event.key;
    if (key === '9')
    {
        tomSound.currentTime = 0;
        tomSound.play()
    }
    
})




