const duck = document.querySelector('.game-object');
const result = document.querySelector('.result');
const time = document.querySelector('.timer');
const game1 = document.querySelector('.game1');
const game2 = document.querySelector('.game2');
const option = document.querySelectorAll('.option');
const btn = document.querySelector('.start');
const backBtn = document.querySelector('.back');
const settings = document.querySelector('.settings');
const settingsList = document.querySelector('.settings-list');
const apply = document.querySelector('.apply');
const secondsInput = document.querySelector('.seconds-input');
const secondsInput2 = document.querySelector('.seconds-input2');
const historyBtn = document.querySelector('.history');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const historyList = document.querySelector('.history-list');
const clear = document.querySelector('.clear');
let n = 0;
let n2 = 0;
let seconds;
let seconds2;
let id = localStorage.length;
let data;
let arr2 = [];

const chooseFirstGame = () => {
    one.classList.remove('d-none');
    two.classList.add('d-none');
    duck.classList.remove('d-none');
    settings.classList.remove('d-none');
    secondsInput.classList.remove('d-none');
    btn.classList.add('block');
    option.forEach(el => el.classList.add('d-none'));
    btn.removeEventListener('click', start2);
    btn.addEventListener('click', start);
    backBtn.classList.remove('d-none');
    result.classList.remove('d-none');
    result.textContent = '';
    historyBtn.classList.remove('d-none');
    clear.classList.remove('d-none');

}

const start = () => {
    seconds = secondsInput.value;
    historyList.classList.add('d-none');
    n = 0;
    result.textContent = '';
    const timer = () => {
        if (seconds > 0) {
            seconds--;
            time.textContent = `Pozostało: ${seconds}s`;
            duck.addEventListener('click', firstGame);
            btn.classList.add('hidden');
            settings.classList.add('hidden');
            settingsList.classList.add('hidden');
            clear.classList.add('d-none');
        } else {
            duck.removeEventListener('click', firstGame);
            duck.style.left = '50%';
            duck.style.top = '55%';
            duck.style.rotate = '0deg';
            time.textContent = '';
            result.textContent = `Udalo ci sie kliknac w kaczke: ${n} razy!`;
            btn.classList.remove('hidden');
            settings.classList.remove('hidden');
            clear.classList.remove('d-none');
            clearInterval(interval);

            class FirstLog {
                constructor(click, time) {
                    this.click = click
                    this.time = time
                }
            }

            const firstLog = new FirstLog(n, secondsInput.value);

            localStorage.setItem(`${id}`, JSON.stringify(firstLog));
            id++;

            for (h = 0; h < localStorage.length; h++) {
                data = JSON.parse(localStorage.getItem(h));

            }
            if (data.click !== 0) {
                const p = document.createElement('p');
                p.textContent = `${data.click} kliknięc w ${data.time}s`;
                historyList.append(p);
            }




        }



    }
    const interval = setInterval(timer, 1000);
}




const firstGame = () => {

    n++;

    let randomX = Math.floor(Math.random() * 55);
    let randomY = Math.floor(Math.random() * 85);

    let randomDeg = Math.floor(Math.random() * 360);

    duck.style.left = randomY + "vw";
    duck.style.top = randomX + "vh";
    duck.style.tranform = `none`;
    duck.style.rotate = randomDeg + "deg";
    result.textContent = `duck click: ${n}`;


}




const chooseSecondGame = () => {
    one.classList.add('d-none');
    two.classList.remove('d-none');
    duck.classList.remove('d-none');
    btn.classList.add('block');
    settings.classList.remove('d-none');
    secondsInput2.classList.remove('d-none');
    option.forEach(el => el.classList.add('d-none'));
    btn.addEventListener('click', start2);
    btn.removeEventListener('click', start);
    backBtn.classList.remove('d-none');
    result.classList.remove('d-none');
    result.textContent = '';

}

const start2 = () => {
    btn.removeEventListener('click', start);
    result.textContent = '';
    time.textContent = '';
    settingsList.classList.add('hidden');
    historyList.classList.add('d-none');
    seconds2 = 0;
    n2 = 0;
    const clock = () => {
        if (n2 == secondsInput2.value) {
            duck.removeEventListener('click', secondGame);
            clearInterval(inter);
            time.textContent = '';
            btn.classList.remove('hidden');
            result.textContent = `Udało ci się kliknąć ${secondsInput2.value} razy w ciągu ${seconds2}s`;
            duck.style.left = '50%';
            duck.style.top = '55%';
            duck.style.rotate = '0deg';
            settings.classList.remove('hidden');

        } else {
            duck.addEventListener('click', secondGame);
            btn.classList.add('hidden');
            settings.classList.add('hidden');
            settingsList.classList.add('hidden');
            seconds2++;
            time.textContent = `Twój czas: ${seconds2}s`;
        }
    }

    const inter = setInterval(clock, 1000);


}


const secondGame = () => {
    n2++;




    let randomX = Math.floor(Math.random() * 60);
    let randomY = Math.floor(Math.random() * 90);

    let randomDeg = Math.floor(Math.random() * 300);

    duck.style.left = randomY + "vw";
    duck.style.top = randomX + "vh";
    duck.style.tranform = `none`;
    duck.style.rotate = randomDeg + "deg";
    result.textContent = `duck click: ${n2}`;


}










const back = () => {
    duck.classList.add('d-none');
    settings.classList.add('d-none');
    option.forEach(el => el.classList.remove('d-none'));
    btn.classList.remove('block');
    backBtn.classList.add('d-none');
    settingsList.classList.add('hidden');
    historyList.classList.add('d-none');
    seconds = 0;
    n = 0;
    n2 = secondsInput2.value;
    seconds2 = 0;
    time.textContent = '';
    result.classList.add('d-none');
    secondsInput.classList.add('d-none');
    secondsInput2.classList.add('d-none');
    historyBtn.classList.add('d-none');
    clear.classList.add('d-none');
}


game1.addEventListener('click', chooseFirstGame);
game2.addEventListener('click', chooseSecondGame);
backBtn.addEventListener('click', back);
historyBtn.addEventListener('click', () => {
    historyList.classList.toggle('d-none');
})
settings.addEventListener('click', () => {
    settingsList.classList.toggle('hidden');
})
apply.addEventListener('click', () => {
    settingsList.classList.add('hidden');
})

window.addEventListener('DOMContentLoaded', () => {


    for (h = 0; h < localStorage.length; h++) {
        data = JSON.parse(localStorage.getItem(h));

        if (data.click !== 0) {
            const p = document.createElement('p');
            p.textContent = `${data.click} clicks in ${data.time}s`;
            historyList.append(p);
        }
    }


})

clear.addEventListener('click', () => {

    localStorage.clear();
    document.location.reload();

})