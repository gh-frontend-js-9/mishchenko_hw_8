//chose lvl
let easylvl = document.getElementById("easy");

function startEasy() {
    timer();
    ghost();
    ghostEasyLevel();
    document.getElementsByClassName('tamagotchi')[0].style.display = "block";
    document.getElementsByClassName('chose-pet')[0].style.display = "none";
    document.getElementById("pet-ghost").style.display = "block";
}

easylvl.addEventListener("click", startEasy);


let hardlvl = document.getElementById("hard");

function startHard() {
    timer();
    duck();
    ducktHardLevel();
    document.getElementsByClassName('tamagotchi')[0].style.display = "block";
    document.getElementsByClassName('chose-pet')[0].style.display = "none";
    document.getElementById("pet-duck").style.display = "block";
}

hardlvl.addEventListener("click", startHard);

//lifetime
let time, seconds;

function timer() {
    time = 0;
    seconds = setInterval(ticks, 1000);
}

function ticks() {
    time++;
    document.getElementById("lifetime").
    childNodes[0].nodeValue = time;
}

//randomize stats
let food = Math.floor((Math.random() * (100 - 30) + 30));

let clean = Math.floor((Math.random() * (100 - 30) + 30));

let happiness = Math.floor((Math.random() * (100 - 30) + 30));

//if chose easy lvl
function ghostEasyLevel(timer = 3) {
    food = food - parseInt(timer);
    clean = clean - parseInt(timer);
    happiness = happiness - parseInt(timer);
    document.getElementById('food').setAttribute("value", food);
    document.getElementById('clean').setAttribute("value", clean);
    document.getElementById('happiness').setAttribute("value", happiness);
    document.getElementById('food-per').innerHTML = food + '%';
    document.getElementById('clean-per').innerHTML = clean + '%';
    document.getElementById('happiness-per').innerHTML = happiness + '%';

    if (food > 100) {
        food = 100;
        document.getElementById('food').setAttribute("value", food);
        document.getElementById('food-per').innerHTML = food + '%';
    }
    if (clean > 100) {
        clean = 100;
        document.getElementById('clean').setAttribute("value", clean);
        document.getElementById('clean-per').innerHTML = clean + '%';
    }
    if (happiness > 100) {
        happiness = 100;
        document.getElementById('happiness').setAttribute("value", happiness);
        document.getElementById('happiness-per').innerHTML = happiness + '%';
    }
    if (food < 0 || clean < 0 || happiness < 0) {
        clearInterval(timer);
        clearInterval(seconds);
        document.getElementById('eat').disabled = true;
        document.getElementById('wash').disabled = true;
        document.getElementById('run').disabled = true;
        document.getElementById("game-over").style.display = "block";
        document.getElementById("pet-ghost").style.display = "none";
        document.getElementById("died").style.display = "block";
    }
}

function ghost() {
    timer = setInterval(ghostEasyLevel, 5000);
}

//if chose hard lvl
function ducktHardLevel(timer = 5) {
    food = food - parseInt(timer);
    clean = clean - parseInt(timer);
    happiness = happiness - parseInt(timer);
    document.getElementById('food').setAttribute("value", food);
    document.getElementById('clean').setAttribute("value", clean);
    document.getElementById('happiness').setAttribute("value", happiness);
    document.getElementById('food-per').innerHTML = food + '%';
    document.getElementById('clean-per').innerHTML = clean + '%';
    document.getElementById('happiness-per').innerHTML = happiness + '%';

    if (food > 70) {
        food = 70;
    }
    if (clean > 70) {
        clean = 70;
    }
    if (happiness > 70) {
        happiness = 70;
    }
    if (food <= 0 || clean <= 0 || happiness <= 0) {
        clearInterval(timer);
        clearInterval(seconds);
        document.getElementById('eat').disabled = true;
        document.getElementById('wash').disabled = true;
        document.getElementById('run').disabled = true;
        document.getElementById("game-over").style.display = "block";
        document.getElementById("pet-duck").style.display = "none";
        document.getElementById("died").style.display = "block";
    }
}

function duck() {
    timer = setInterval(ducktHardLevel, 5000);

}

//action btn's
function Eat() {
    food += 30;
    clean -= 20;
}
function Wash() {
    clean += 40;
    happiness -= 20;
}
function Run() {
    happiness += 15;
    food -= 10;
}