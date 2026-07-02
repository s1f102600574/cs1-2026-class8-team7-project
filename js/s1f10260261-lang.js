const musicData = {
    refresh: [
        { title: "Song 1", artist: "Artist A", point: "nice" },
        { title: "Song 2", artist: "Artist B", point: "good" }
    ],
    energy: [
        { title: "Song 3", artist: "Artist C", point: "exciting" },
        { title: "Song 4", artist: "Artist D", point: "energetic" }
    ],
    study: [
        { title: "Song 5", artist: "Artist E", point: "focus" },
        { title: "Song 6", artist: "Artist F", point: "concentrated" }
    ],
    chill: [
        { title: "Song 7", artist: "Artist G", point: "relaxing" },
        { title: "Song 8", artist: "Artist H", point: "calming" }
    ]
};

let currentMood = null;// 現在のムードを保持する変数

function displayMusicList(mood) {
    const musiclist = musicData[mood];

    currentMood = mood; // 現在のムードを更新
    //ランダム選曲
    const randomIndex = Math.floor(Math.random() * musiclist.length);
    const selectedMusic = musiclist[randomIndex];
    const displayArea = document.getElementById("display-area");

    displayArea.innerHTML =
        "選んだムード: " + mood + "<br>" +
        "曲名: " + selectedMusic.title + "<br>" +
        "アーティスト: " + selectedMusic.artist + "<br>" +
        "ポイント: " + selectedMusic.point;
    
    resetStyles();

    document.getElementById(mood + "-btn").classList.add("active-" + mood);
    displayArea.classList.add("active-" + mood);

    document.getElementById("reload-btn").style.display = "inline-block";
}

function retry(){
    if (currentMood) {
        displayMusicList(currentMood);
    }
}

function resetStyles() {
    document.getElementById("refresh-btn").classList.remove("active-refresh");
    document.getElementById("energy-btn").classList.remove("active-energy");
    document.getElementById("study-btn").classList.remove("active-study");
    document.getElementById("chill-btn").classList.remove("active-chill");

    const displayArea = document.getElementById("display-area");
    displayArea.classList.remove("active-refresh", "active-energy", "active-study", "active-chill");
}