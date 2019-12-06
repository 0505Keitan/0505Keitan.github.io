setInterval('clock()',500); //0.5秒毎にclock()を実行

let i = (n) => ('0' + n).slice(-2);

function clock() {
	document.getElementById("view_year").innerHTML = getyear();
	document.getElementById("view_month").innerHTML = getmon();
	document.getElementById("view_day").innerHTML = getday();
	document.getElementById("view_hour").innerHTML = geth();
	document.getElementById("view_min").innerHTML = getmin();
	document.getElementById("view_sec").innerHTML = getsec();
}

function getyear() {
	var now = new Date();
	var year = now.getFullYear();
	return year;
}

function getmon() {
	var now = new Date();
	var mon = now.getMonth()+1;
	return i(mon);
}

function getday() {
	var now = new Date();
	var day = now.getDate();
	return i(day);
}

function geth() {
	var now = new Date();
	var hour = now.getHours();
	return i(hour);
}

function getmin() {
	var now = new Date();
	var min = now.getMinutes();
	return i(min);
}

function getsec() {
	var now = new Date();
	var sec = now.getSeconds();
	return i(sec);
}