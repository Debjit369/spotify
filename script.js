console.log("welcome to spotify");

let songindex=0;
let audioElement = new Audio('song.mp3');
let masterplay =document.getElementById('masterplay');
let progressbar =document.getElementById('progressbar');
let gif =document.getElementById('gif');
//let songs = [
   //{songname: "jamal kudu ",filepath:"song.mp3",coverpath:"jamal-kudu-song-meaning"},
   //{songname: "shyama sangit ",filepath:"song2.mp3",coverpath:"cover.jpg"},
   //{songname: "shyama sangit ",filepath:"song3.mp3",coverpath:"cover.jpg"},
   //{songname: "shyama sangit",filepath:"song4.mp3",coverpath:"cover.jpg"},
//]

masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currenttime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})
progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(progressbar.value * audioElement.duration)/100;
})
const makeAllPlays =()=>{
   Array.form(document.getElementsByClassName('songitemplay')).forEach((element)=>{
     element.classList.remove('fa-play-circle')
     element.classList.add('fa-play-circle')
})
}

