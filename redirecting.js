const searchInput=document.getElementById("search-btn")
let textId=document.getElementById("text-id")

const proceedBtn=document.getElementById("proceed-btn")
proceedBtn.addEventListener("click",function(){
    const value=searchInput.value.toLowerCase()
    if(value==="sad"){
        window.open("https://open.spotify.com/playlist/37i9dQZF1DWWbVYL1LBbVy?si=bf4ff4a2b6d04a4c","_blank")
    }else if(value==="happy"){
        window.open("https://open.spotify.com/playlist/37i9dQZF1EIgG2NEOhqsD7?si=1ab2a410bd1d42b7","_blank")
    }else if(value==="confused"){
        window.open("https://open.spotify.com/playlist/1pBbDNkyzpx3nuK620qv6N?si=6acd698a1470440d","_blank")
    }else{
        textId.textContent="Kindly enter one of the three emotions registered (happy,sad,confused)";
    }
    searchInput.value=""
})

const sliderPanel=document.getElementById("slider-panel")
const sliderBtn=document.getElementById("slider-btn")
const sliderValue=document.getElementById("slider-value")
const moodSlider=document.getElementById("mood-slider")

sliderBtn.addEventListener("click",function(){
    sliderPanel.style.display=sliderPanel.style.display==="none"?"block":"none"
})

moodSlider.addEventListener("input",function(){
    switch(moodSlider.value) {
        case "-1": sliderValue.textContent = "Sad"; break;
        case "0": sliderValue.textContent = "Neutral"; break;
        case "1": sliderValue.textContent = "Happy"; break;
    }
})

moodSlider.addEventListener("change",function(){
    switch(moodSlider.value){
        case "-1":window.open("https://open.spotify.com/playlist/37i9dQZF1DWWbVYL1LBbVy?si=bf4ff4a2b6d04a4c","_blank")
        case "0":window.open("https://open.spotify.com/playlist/1pBbDNkyzpx3nuK620qv6N?si=6acd698a1470440d","_blank")
        case "1":window.open("https://open.spotify.com/playlist/1pBbDNkyzpx3nuK620qv6N?si=6acd698a1470440d","_blank")
        default: sliderPanel.style.display="none"
    }
})


const createBtn=document.getElementById("create-btn")
const playlistId=document.getElementById("playlist-container")


const defaultPlaylists = [
  { name: "tum,mai aur 2 cutting chai", artists: "Various Artists", image: "summer.jpeg", link: "https://open.spotify.com/playlist/3DYRPiDWZqX4xP5G02ycml?si=D4BWs8ggTuSWRSVmn_UXRA&pi=kTS5rHlzTR69g" },
  { name: "2021 hurray!!", artists: "Various Artists", image: "summer.jpeg", link: "https://open.spotify.com/playlist/1yjo376oBHMWgiPX9bQT9S?si=li7i3jieTRCV8KFz_-qzNQ&pi=EP3DvVBZQjace" },
  { name: "illusion", artists: "Various Artists", image: "summer.jpeg", link: "https://open.spotify.com/playlist/1u1sgF7BgJwnAwVq0w4Oug?si=68ixQzztTVW53atiZRm6Yg&pi=iT7KO6aiSd-ON" },
  { name: "younger", artists: "Various Artists", image: "summer.jpeg", link: "https://open.spotify.com/playlist/4tCRyM3fKwl0ZxwYHXiWlz?si=KvdLVvlFQDm6vp3nP1ytTA&pi=tZS3y0KVRMeYy" },
  { name: "make way for the sun", artists: "Various Artists", image: "summer.jpeg", link: "https://open.spotify.com/playlist/0hs5BVCnFpoJwStDehvK4m?si=-EzlajEXSwi0viEtRKuk_A&pi=zFf4cwvNTa-7k" },
  { name: "a little bit french", artists: "Various Artists", image: "summer.jpeg", link: "https://open.spotify.com/playlist/0yJp5F4DWM4kuL6mRXWuz8?si=I5EnV4isTB-mSLuILj3UaA&pi=e-0gVh39SzSWL" }
]

let userPlaylists = JSON.parse(localStorage.getItem("playlists")) || []

let playlists = [...defaultPlaylists, ...userPlaylists]

function saveplaylists() {
  localStorage.setItem("playlists", JSON.stringify(userPlaylists))
}

function renderPlaylists(){
    playlistId.innerHTML=""
    playlists.forEach(pl=>{
        const div=document.createElement("div")
        div.classList.add("playlist")
        div.innerHTML=`
            <img class="imgi" src=${pl.image} alt='cover'>
            <div class='name'>${pl.name}</div>
            <div class='artists'>${pl.artists}</div>
            <button class="listen" onclick="window.open('${pl.link}','_blank')">Listen</button>
        `
        playlistId.appendChild(div)
    })
    
}

createBtn.addEventListener("click",function(){
    const newName = prompt("Enter playlist name:")
    const newArtists = prompt("Enter artist names:")
    const newImage = prompt("Enter image URL (or leave blank for default):") || "summer.jpeg"
    const newLink = prompt("Enter Spotify link:")

    if(newName && newArtists && newLink){
        playlists.push({
            name:newName,
            artists:newArtists,
            image:newImage,
            link:newLink
        })
        saveplaylists()
        renderPlaylists()
    }else{
        alert("Details for the new playlists not entered properly.")
    }
})
renderPlaylists()
