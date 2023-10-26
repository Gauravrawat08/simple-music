const volume = document.querySelector("#volume");
const song = document.querySelector("#song");
const pauseIcon = document.querySelector("#pause");

song.onloadmetadata = function(){
    volume.max = song.duration;
    volume.value = song.currentTime;
}

const playPause = ()=>{
 if(pauseIcon.classList.contains("fa-pause")){
    song.pause();
    pauseIcon.classList.remove("fa-pause");
    pauseIcon.classList.add("fa-play");

 }
 else{
    song.play();
    pauseIcon.classList.add("fa-pause");
    pauseIcon.classList.remove("fa-play");
 }
}
 
if(song.play()){
    setInterval(() =>{
        volume.value= song.currentTime;

    },500);
}

volume.onchange= function(){
    song.play();
    song.currentTime= volume.value;
    pauseIcon.classList.add("fa-pause");
    pauseIcon.classList.remove("fa-play");
}