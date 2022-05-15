class movie {
    constructor(name, studio){
        this.name = name;
        this.studio = studio;
        this.link = `../media/${this.studio}/${this.name}.mkv`;
        this.player = function player(){
            let plyrPlayer =    `<div class="container">
                                    <video controls data-poster="" class="vid">
                                        <source src="${this.link}" type="video/mp4" />
                                    </video>
                                </div>`;
            let section = document.getElementById("main-content");
            let content = document.getElementById('side');
            content.remove();
            section.style.background = "#000000";
            section.innerHTML += plyrPlayer;
            const player = new Plyr('.vid');
        }
    }
}

function openPlayer(film, studio){
    let a = new movie(film, studio);
    a.player();
}