class Slider {
    constructor(n){
        this.slides = document.getElementsByClassName("slides")[n-1];
        this.btngauche = document.getElementsByClassName("slide-left")[n-1];
        this.btndroit = document.getElementsByClassName("slide-right")[n-1];
        this.translate = 0;
    }

    gauche = function () {
        const pictureWidth = 428+44;
        this.translate = this.translate + pictureWidth;
        if (Math.abs(this.translate) == 0) {
            this.btngauche.style.display = "none";
        }
        this.slides.style.transform = `translatex(${this.translate}px)`;
        this.btndroit.style.display = "flex";
    }
    
    droite = function () {
        const pictureWidth = 428+44;
        this.translate = this.translate - pictureWidth;
        if (Math.abs(this.translate) > Number(this.slides.scrollWidth - pictureWidth*3)) {
            this.btndroit.style.display = "none";
        }
        this.slides.style.transform = `translatex(${this.translate}px)`;
        this.btngauche.style.display = "flex";
    }
}

const marvel = new Slider(1);