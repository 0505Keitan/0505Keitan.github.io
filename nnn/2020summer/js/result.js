if(1 < window.location.search.length){
  const query = window.location.search.substring(1);
  const key = query.split("&");
  const kekka = key[0].split("=");
  const name = key[1].split("=");
  if(omikuji.indexOf(decodeURIComponent(kekka[1])) >= 0){
    $("#result_text").innerText=`${decodeURIComponent(name[1])}さんの結果`;
    $("#result").innerText=decodeURIComponent(kekka[1]);
    $("#twitter").href = `https://twitter.com/intent/tweet?text=${encodeURI(`${decodeURIComponent(name[1])}さんの結果は「${decodeURIComponent(kekka[1])}」でした！\n`)}&url=https://0505Keitan.com/nnn/2020summer&hashtags=Webおみくじ`;
    setTimeout(function(){
      draw(decodeURIComponent(kekka[1]), decodeURIComponent(name[1]));
    }, 400)
  }else{
    location.href=`index.html`
  }
}else{
  location.href=`index.html`
}

function draw(result, name) {
  const element = $("#canvas");
  let context = element.getContext( "2d" );

  context.beginPath ();
  context.font = "bold 60px Arial, Noto Sans JP, sans-serif";
	context.fillStyle = '#000';
	context.textBaseline = 'top';
	context.textAlign = 'left';
  context.fillText(`${name}さんは`, 60, 60);

  context.beginPath ();
  context.font = "bold 200px Arial, Kosugi Maru, sans-serif";
	context.fillStyle = '#000';
	context.textBaseline = 'center';
	context.textAlign = 'center';
  context.fillText(result, element.width/2-50, element.height/2-80);

  context.beginPath ();
  context.font = "bold 35px Arial, Noto Sans JP, sans-serif";
	context.fillStyle = '#000';
	context.textAlign = 'right';
  context.fillText(getNow(), 800, 500);
}

function getNow() {
  const now = new Date();
  const Y = now.getFullYear();
  const M = now.getMonth()+1;
  const D = now.getDate();
  const h = ('0' + now.getHours()).slice(-2);
  const m = ('0' + now.getMinutes()).slice(-2);
  return `${Y}/${M}/${D} ${h}:${m}`;
}