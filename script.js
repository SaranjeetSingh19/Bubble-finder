let hitrn;
let score = 0;

function printbubs(){
    var bubs = "";
    for(let i = 0; i<168; i++){
        var rn = Math.floor(Math.random()*10);
        bubs += `<div class="bubble">${rn}</div>`
    } 
    document.querySelector('#pbtm').innerHTML = bubs;
}
function Contimer(){
    var timer = 60;
   let intTimer = setInterval(function(){
      if(timer>0){
          timer--;
          document.querySelector('#timeval').textContent = timer;
      }
      else{
        clearInterval(intTimer);
        document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`
      }
      
    },1000)
}
function newhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent= hitrn;
}
function increasescore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}

document.querySelector("#pbtm").addEventListener('click', function(elems){
    let clickedNum = Number(elems.target.textContent) 
    if(clickedNum===hitrn){
        increasescore()
        printbubs()
        newhit()

    }   
})

Contimer()
printbubs()
newhit()
