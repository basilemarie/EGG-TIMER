const open_btn = document.querySelector(".start_btn");
const exit_btn_1 = document.querySelector(".exit_1");
const exit_btn_2 = document.querySelector(".exit_2")

const screens = document.querySelectorAll(".screen");

function showScreen(target){
    screens.forEach(screen => {
        screen.classList.remove("active");
    });
    document.querySelector(target).classList.add("active");
}

open_btn.addEventListener("click", ()=>{
    showScreen(".egg_container");
})

exit_btn_1.addEventListener("click", () => {
    showScreen(".front_page");
  });


let intervalId = null;

function timer(min,sec){

    if (intervalId) return;

    function display() {
        let real_min = min < 10 ? `0${min}` : min;
        let real_sec = sec < 10 ? `0${sec}` : sec;
        document.getElementById("timer").innerHTML = `${real_min}:${real_sec}`;
    }

    display();

    intervalId = setInterval(()=>{

        if(sec===0 && min===0){
            clearInterval(intervalId);
            intervalId = null;
            document.getElementById("timer").innerHTML = "TIME TO EAT!";
            return;
        }

        if(sec===0){
            min--;
            sec=59;
        }else{
            sec--;
        }

        display();

    },1000);
}

exit_btn_2.addEventListener("click", () => {
    showScreen(".egg_container");
    clearInterval(intervalId);
    intervalId = null;
    document.getElementById("timer").innerHTML = "00:00";
  });

trigBtn = document.querySelector(".timer_triger");

let eggs = {"coque":[3,0], "plat":[3,0],"molet":[5,45],"dur":[10,0]};
let selectedEgg = null;

let egg_types = document.querySelectorAll(".egg");
let timer_text = document.getElementById("timer");

egg_types.forEach(egg_type => {

    egg_type.addEventListener("click",()=>{
        selectedEgg = egg_type.classList[1];
        showScreen(".timer_page");
    });
});

trigBtn.addEventListener("click", ()=> {
    const [min,sec] = eggs[selectedEgg];
    timer(min,sec);
});
