let numberOfDrumButtons = document.querySelectorAll(".drum").length;

const audio = {
    class : ["w","a","s","d","j","k","l"],
    images : ["tom-1","tom-2","tom-3","tom-4","snare","crash","kick-bass"] 
}

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        let buttonInnerHtml = this.innerHTML;
        switch (buttonInnerHtml) {
            case audio.class[i] :
                let audioFile = new Audio('sounds/'+audio.images[i]+'.mp3');
                audioFile.play()
                break;
        }
        buttonAnimation(buttonInnerHtml);

    });
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector("." + currentKey); //let activeButton = document.querySelector("." + currentKey).classList.add('pressed'); daca lasam asa nu functiona
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
}