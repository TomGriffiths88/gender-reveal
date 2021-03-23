confetti.stop();

let text = document.querySelector('.intro');
let time = document.querySelector('.time');
let container = document.querySelector('.container');
const button = document.querySelector('.button');
const announcementTime = new Date('2021, 03, 23, 19:00 GMT');

const blue = '#9ec8ff';


let timeLeft = +announcementTime - +new Date();

const init = () => {
   
    button.addEventListener('click', (e) => {
        e.preventDefault();
        announceGender();
    });

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