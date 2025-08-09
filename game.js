let  gameseq = [];
let userseq = [];

let started = false;
let  level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelup();
  }
});
function levelup() {
  level++;
}



// var number=43;
// var number = 65;
// console.log(number+number);