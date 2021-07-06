let roulette;
let isStart = false;
function button() {
  if(!isStart){
    if($("#names").value.length >= 10){alert('名前は9文字以内で入力してね！');return;}
    $("#result").style="display:inline-block;";
    $("#name").style="display:none;";
    $("#status").innerText="STOPを押してね！";
    let result = $('#result')
    roulette = setInterval(function(){
      result.innerText = omikuji[Math.round(Math.random()*(omikuji.length-1))]
    }, 10)
    $("#btn").innerText = "STOP"
    isStart=!isStart
  }else{
    clearInterval(roulette)
    setTimeout(function(){
      let names = $("#names").value;
      if(!names) names=encodeURI("ななし")
      location.href=`result.html?kekka=${encodeURI(result.innerText)}&name=${names}`
    }, 500)
  }
}