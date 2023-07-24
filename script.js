 console.log("Welcome to spotify")

// Intialize the variables
let songIndex=document.getElementById('index')
let audioElement = new Audio('songs/1.mp3')
let masterplay=document.getElementById('masterplay')
let myProgressBar=document.getElementById('myProgressBar')
let playgif=document.getElementById("gif")
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName("songItem"))
// let audio = document.getElementById("myAudio");
let track = document.createElement("audio")
track.addEventListener("timeupdate", songTimeUpdate);
trackCurrentTime = document.querySelector(".current-time"),
trackDuration = document.querySelector(".duration-time");


let songs = [
    {songName:"kahani Suno 2.0",filepath:"songs/1.mp3",coverPath: "covers/1.jpg"},
    {songName:"Maan Meri Jan",filepath:"songs/2.mp3",coverPath: "covers/2.jpg"},
    {songName:"Phir Bhi Tumko Chaahunga",filepath:"songs/3.mp3",coverPath: "covers/3.jpg"},
    {songName:"Roi Na",filepath:"songs/4.mp3",coverPath: "covers/4.jpg"},
    {songName:"Dil",filepath:"songs/5.mp3",coverPath: "covers/5.jpg"},
    {songName:"Bapu Tere Karke 2",filepath:"songs/6.mp3",coverPath: "covers/6.jpg"},
    {songName:"Aaja We Mahiya",filepath:"songs/7.mp3",coverPath: "covers/7.jpg"},
    {songName:"Naar Ni Dekhi",filepath:"songs/8.mp3",coverPath: "covers/8.jpg"},
]

songItems.forEach((element,i)=>
{
    
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
   
  
})

//   audioElement.play();

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        playgif.style.opacity=1;

    }
    else{
        audioElement.pause()
        masterplay.classList.remove("fa-circle-pause");
        masterplay.classList.add("fa-circle-play");
        playgif.style.opacity=0;

    }
    })


//Listen to evemts
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate')

    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=(myProgressBar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle')
     element.classList.add('fa-play-circle')
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id)
    e.target.classList.remove('fa-play-circle')
    e.target.classList.add('fa-pause-circle')
    masterSongName.innerText=songs[songIndex].songName
    audioElement.src=`songs/${songIndex +1}.mp3`
    audioElement.currentTime=0;
    audioElement.play(); 
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    playgif.style.opacity=1;
})
})

document.getElementById('next').addEventListener('click',()=>
{
    if(songIndex>=8)
    {
        songIndex=0;
    }
    else
    {
        songIndex +=1;
    }
    masterSongName.innerText=songs[songIndex].songName
    audioElement.src=`songs/${songIndex +1}.mp3`
    audioElement.currentTime=0;
    audioElement.play(); 
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    playgif.style.opacity=1;
})

document.getElementById('previous').addEventListener('click',()=>
{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex -=1;
    }
    masterSongName.innerText=songs[songIndex].songName
    audioElement.src=`songs/${songIndex +1}.mp3`
    audioElement.currentTime=0;
    audioElement.play(); 
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    playgif.style.opacity=1;
})


function songTimeUpdate() {
    if (track.duration) {
      let curmins = Math.floor(track.currentTime / 60);
      let cursecs = Math.floor(track.currentTime - curmins * 60);
      let durmins = Math.floor(track.duration / 60);
      let dursecs = Math.floor(track.duration - durmins * 60);
  
      if (dursecs < 10) {
        dursecs = "0" + dursecs;
      }
      if (durmins < 10) {
        durmins = "0" + durmins;
      }
      if (curmins < 10) {
        curmins = "0" + curmins;
      }
      if (cursecs < 10) {
        cursecs = "0" + cursecs;
      }
      trackCurrentTime.innerHTML = curmins + ":" + cursecs;
      trackDuration.innerHTML = durmins + ":" + dursecs;
    } else {
      trackCurrentTime.innerHTML = "00" + ":" + "00";
      trackDuration.innerHTML = "00" + ":" + "00";
    }
  }