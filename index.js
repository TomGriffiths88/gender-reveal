confetti.stop();

let text = document.querySelector('.intro');
let time = document.querySelector('.time');
let container = document.querySelector('.container');
const button = document.querySelector('.button');
const announcementTime = new Date('2021, 03, 23, 15:00 GMT');

const blue = '#9ec8ff';


let timeLeft = +announcementTime - +new Date();

const init = () => {
    updateTimer();
    button.addEventListener('click', (e) => {
        e.preventDefault();
        announceGender();
    });

    if(timeLeft > 0) {
        text.style.opacity = 1;
        time.style.opacity = 1;
    } else {
        text.style.opacity = 1;
        setAnnouncement();
    }
   
}

     
const updateTimer = () => {
    var hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    var minutesLeft = Math.floor((timeLeft / 1000) / 60 % 60);
    var secondsLeft = Math.floor((timeLeft / 1000) % 60);
    time.innerText = `${hoursLeft} hrs, ${minutesLeft} mins, ${secondsLeft} seconds`;
    time.style.color = randomColor();
}

const timer = setInterval( () => {
  
  const now = new Date;
  timeLeft = +announcementTime - +now;
    
  if(timeLeft > 0) {
    updateTimer();
  } else {
      setAnnouncement();
  }
}, 1000);

const setAnnouncement = () =>{
    clearInterval(timer);
    text.innerText = 'Click the button to reveal';
    time.style.display = 'none';
    button.style.display = 'block';
}


const announceGender = () => {
    confetti.start();
    text.innerText = 'Its a boy!!!';
    text.style.color = '#ffffff';
    container.style.background = blue;
    button.remove();
    document.querySelector('.container').classList.add('active');
}





init();