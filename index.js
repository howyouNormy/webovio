let knopka = document.querySelector(".main_button");

function clikk(){
    let body = document.querySelector("body");
    body.classList.toggle("newbl");
    let txt = document.querySelector(".tablosn");
    txt.classList.toggle("newtxt");
}

knopka.addEventListener("click", clikk);