function spaek(letter){
    let audio = document.getElementById("audio");
    let speaker = document.getElementById("speaker");
    audio.src='../images/apple.mp3'
    if(letter == 'a')audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/apple.mp3';
    else if(letter=='b') audio.src='children-play/audio/ball.mp3';
    else if(letter=='c') audio.src='children-play/audio/cat.mp3';
    else if(letter=='d') audio.src='children-play/audio/dog.mp3';
    else if(letter=='e') audio.src='children-play/audio/elephant.mp3';
    else if(letter=='f') audio.src='children-play/audio/frog.mp3';
    else if(letter=='g') audio.src='children-play/audio/goat.mp3';
    else if(letter=='h') audio.src='children-play/audio/home.mp3';
    else if(letter=='i') audio.src='children-play/audio/iron.mp3';
    else if(letter=='j') audio.src='children-play/audio/jug.mp3';
    else if(letter=='k') audio.src='children-play/audio/kite.mp3';
    else if(letter=='l') audio.src='children-play/audio/lamp.mp3';
    else if(letter=='m') audio.src='children-play/audio/monkey.mp3';
    else if(letter=='n') audio.src='children-play/audio/never.mp3';
    else if(letter=='o') audio.src='children-play/audio/onion.mp3';
    else if(letter=='p') audio.src='children-play/audio/paper.mp3';
    else if(letter=='q') audio.src='children-play/audio/queen.mp3';
    else if(letter=='r') audio.src='children-play/audio/rainbow.mp3';
    else if(letter=='s') audio.src='children-play/audio/shoen.mp3';
    else if(letter=='t') audio.src='children-play/audio/table.mp3';
    else if(letter=='u') audio.src='children-play/audio/umbrella.mp3';
    else if(letter=='v') audio.src='children-play/audio/van.mp3';
    else if(letter=='w') audio.src='children-play/audio/women.mp3';
    else if(letter=='x') audio.src='children-play/audio/xmas.mp3';
    else if(letter=='y') audio.src='children-play/audio/yak.mp3';
    else if(letter=='z') audio.src='children-play/audio/zebra.mp3';
    else alert("Not found");
    
    speaker.style.color = "black"    
    audio.play()
    setTimeout(function(){
        speaker.style.color = "#ddd"
    },1000)
}