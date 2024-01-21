function spaek(letter){
    let audio = document.getElementById("audio");
    let speaker = document.getElementById("speaker");
    audio.src='../images/apple.mp3'
    if(letter == 'a')audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/apple.mp3';
    else if(letter=='b') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/ball.mp3';
    else if(letter=='c') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/cat.mp3';
    else if(letter=='d') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/dog.mp3';
    else if(letter=='e') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/elephant.mp3';
    else if(letter=='f') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/frog.mp3';
    else if(letter=='g') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/goat.mp3';
    else if(letter=='h') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/home.mp3';
    else if(letter=='i') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/iron.mp3';
    else if(letter=='j') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/jug.mp3';
    else if(letter=='k') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/kite.mp3';
    else if(letter=='l') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/lamp.mp3';
    else if(letter=='m') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/monkey.mp3';
    else if(letter=='n') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/never.mp3';
    else if(letter=='o') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/onion.mp3';
    else if(letter=='p') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/paper.mp3';
    else if(letter=='q') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/queen.mp3';
    else if(letter=='r') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/rainbow.mp3';
    else if(letter=='s') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/shoen.mp3';
    else if(letter=='t') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/table.mp3';
    else if(letter=='u') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/umbrella.mp3';
    else if(letter=='v') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/van.mp3';
    else if(letter=='w') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/women.mp3';
    else if(letter=='x') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/xmas.mp3';
    else if(letter=='y') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/yak.mp3';
    else if(letter=='z') audio.src='https://raw.githubusercontent.com/saroj425/children-play/master/audio/zebra.mp3';
    else alert("Not found");
    
    speaker.style.color = "black"    
    audio.play()
    setTimeout(function(){
        speaker.style.color = "#ddd"
    },1000)
}