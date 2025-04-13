
var timer = 60;
var hit = 0;
var score = 0;

// ****************     Bubbles   ********************
function bubble(){
  var clutters = "";
  for(var i =1;i<103;i++){   
    var rn = Math.floor(Math.random()*10);
    clutters+= `<div class="bubbles">${rn}</div>`;
  };
  document.querySelector("#footer").innerHTML = clutters;
};


// *************          Timer      *******************

function timerint(){
  var inter = setInterval(function(){
  if(timer>0){
    timer--;
    document.querySelector("#timer").innerText = timer;
  }
  else{
    clearInterval(inter);
    document.querySelector("#footer").innerHTML = `<div id="totalscore">
  <h1>GAME OVER !!!</h1>
  <h2> Your Score is : ${score}</h2>
</div>`;
  }
    
  },1000);
}


// *************          Hit      *******************

function runhit(){
  hit = Math.floor(Math.random()*10);
  document.querySelector("#hit").innerText = hit;
}
// *************          Score      *******************

function increaseScore(){
  score += 10;
  document.querySelector("#score").innerText = score;
}

// *************          Click      *******************
document.querySelector("#footer").addEventListener("click",function(dets){
  var clickedNum = Number(dets.target.textContent);
  if(clickedNum===hit){
    increaseScore();
    runhit();
    bubble();
  }
});


//   ************       FUNCTION CALLING   ****************
bubble();
runhit();
timerint();