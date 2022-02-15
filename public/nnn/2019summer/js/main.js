let isAuto = true;

setInterval('clock()',10); //0.01
setInterval('isAutoCheck()',1000); //01

function clock() {
	document.getElementById("view_year").innerHTML = getyear();
	document.getElementById("view_month").innerHTML = getmon();
	document.getElementById("view_day").innerHTML = getday();
	document.getElementById("view_hour").innerHTML = geth();
	document.getElementById("view_min").innerHTML = getmin();
	document.getElementById("view_sec").innerHTML = getsec();
	if(new Date().getHours() >= 17 || new Date().getHours() < 6){
		document.getElementById("main").style.backgroundColor = "#174300";
		document.getElementById("view").style.color = "#FFFFB9";
	}else{
		document.getElementById("main").style.backgroundColor = "#e9ffe0";
		document.getElementById("view").style.color = "#000000";
	}
}

function htu() {
	let text1 = "AutoFonts：1秒ごとにフォントが自動で変わるモードを解除できます。\n";
	let text2 = "ClockSize：時計の表示のサイズを変更できます。\n";
	let text3 = "ChangeFonts：あらかじめ読み込んであるフォントから好きなフォントを選ぶことができます。\n\n";
	let text4 = "※このサイトのフォントはGoogleFontsを利用しています。";
	alert(text1+text2+text3+text4);
}

function autoFont() {
	isAuto = document.getElementById("autoF").checked;
}

function isAutoCheck() {
	if(isAuto){
		autoFonts();
	}
}

function autoFonts() {
		document.getElementById("view").style.fontFamily = document.getElementsByClassName('fonts')[Math.floor( Math.random() * document.getElementsByClassName('fonts').length )].value + ", sans-serif";
}

function getyear() {
	let now = new Date();
	let year = now.getFullYear();
	let y = year + " - ";
	return y;
}

function getmon() {
	let now = new Date();
	let mon = now.getMonth()+1;
	let mont = ('0' + mon).slice(-2);
	let m = mont + " - ";
	return m;
}

function getday() {
	let now = new Date();
	let day = now.getDate();
	return day;
}

function geth() {
	let now = new Date();
	let hour = now.getHours();
	let h = hour + " : ";
	return h;
}

function getmin() {
	let now = new Date();
	let min = now.getMinutes();
	let m = ('0' + min).slice(-2);
	let minute = m + " : ";
	return minute;
}

function getsec() {
	let now = new Date();
	let sec = now.getSeconds();
	sec = ('0' + sec).slice(-2);
	return sec;
}

window.onload = function(){
	for(i=0;i<document.getElementsByClassName('fonts').length;i++){
		document.getElementsByClassName("fonts")[i].innerText = document.getElementsByClassName('fonts')[i].value;
	}
}

function changeFont(font) {
	document.getElementById("view").style.fontFamily = font + ", sans-serif";
}

function changeSize(size) {
	document.getElementById("view").style.fontSize = size + "%";
}
