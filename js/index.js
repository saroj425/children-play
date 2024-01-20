function spaek(letter){
    let audio = document.getElementById("audio");
    let speaker = document.getElementById("speaker");
    audio.src='../images/apple.mp3'
    if(letter == 'a')audio.src='../audio/apple.mp3';
    else if(letter=='b') audio.src='../audio/ball.mp3';
    else if(letter=='c') audio.src='../audio/cat.mp3';
    else if(letter=='d') audio.src='../audio/dog.mp3';
    else if(letter=='e') audio.src='../audio/elephant.mp3';
    else if(letter=='f') audio.src='../audio/frog.mp3';
    else if(letter=='g') audio.src='../audio/goat.mp3';
    else if(letter=='h') audio.src='../audio/home.mp3';
    else if(letter=='i') audio.src='../audio/iron.mp3';
    else if(letter=='j') audio.src='../audio/jug.mp3';
    else if(letter=='k') audio.src='../audio/kite.mp3';
    else if(letter=='l') audio.src='../audio/lamp.mp3';
    else if(letter=='m') audio.src='../audio/monkey.mp3';
    else if(letter=='n') audio.src='../audio/never.mp3';
    else if(letter=='o') audio.src='../audio/onion.mp3';
    else if(letter=='p') audio.src='../audio/paper.mp3';
    else if(letter=='q') audio.src='../audio/queen.mp3';
    else if(letter=='r') audio.src='../audio/rainbow.mp3';
    else if(letter=='s') audio.src='../audio/shoen.mp3';
    else if(letter=='t') audio.src='../audio/table.mp3';
    else if(letter=='u') audio.src='../audio/umbrella.mp3';
    else if(letter=='v') audio.src='../audio/van.mp3';
    else if(letter=='w') audio.src='../audio/women.mp3';
    else if(letter=='x') audio.src='../audio/xmas.mp3';
    else if(letter=='y') audio.src='../audio/yak.mp3';
    else if(letter=='z') audio.src='../audio/zebra.mp3';
    else alert("Not found");
    speaker.style.color = "black"    
    audio.play()
    setTimeout(function(){
        speaker.style.color = "#ddd"
    },1000)
}