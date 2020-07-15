if(1 < window.location.search.length){
  const query = window.location.search.substring(1);
  const key = query.split("&");
  const kekka = key[0].split("=");
  const name = key[1].split("=");
  if(omikuji.indexOf(decodeURIComponent(kekka[1])) >= 0){
    document.getElementById("result_text").innerText=`${decodeURIComponent(name[1])}さんの結果`;
    document.getElementById("result").innerText=decodeURIComponent(kekka[1]);
    document.getElementById("twitter").href = `https://twitter.com/intent/tweet?text=${encodeURI(`${decodeURIComponent(name[1])}さんの結果は「${decodeURIComponent(kekka[1])}」でした！\n`)}&url=https://0505Keitan.com/nnn/2020summer`
  }else{
    location.href=`index.html`
  }
}else{
  location.href=`index.html`
}