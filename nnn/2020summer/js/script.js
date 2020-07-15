let roulette;
let isStart = false;
function button() {
  if(!isStart){
    document.getElementById("result").style="display:inline-block;";
    document.getElementById("name").style="display:none;";
    document.getElementById("status").innerText="STOPを押してね！";
    let result = document.getElementById('result')
    roulette = setInterval(function(){
      result.innerText = omikuji[Math.round(Math.random()*(omikuji.length-1))]
    }, 10)
    document.getElementById("btn").innerText = "STOP"
    isStart=!isStart
  }else{
    clearInterval(roulette)
    setTimeout(function(){
      let names = document.getElementById("names").value;
      if(!names) names=encodeURI("ななし")
      location.href=`result.html?kekka=${encodeURI(result.innerText)}&name=${names}`
    }, 500)
  }
}