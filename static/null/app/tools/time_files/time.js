setInterval('clock()',500); //0.5秒毎にclock()を実行

let i = (n) => ('0' + n).slice(-2);
let display = (n, e) => document.getElementById(n).innerText = e;

function clock() {
	display("view_year", getyear());
	display("view_month", getmon());
	display("view_day", getday());
	display("view_hour", geth());
	display("view_min", getmin());
	display("view_sec", getsec());
}

function getyear() {
	let now = new Date();
	let year = now.getFullYear();
	return year;
}

function getmon() {
	let now = new Date();
	let mon = now.getMonth()+1;
	return i(mon);
}

function getday() {
	let now = new Date();
	let day = now.getDate();
	return i(day);
}

function geth() {
	let now = new Date();
	let hour = now.getHours();
	return i(hour);
}

function getmin() {
	let now = new Date();
	let min = now.getMinutes();
	return i(min);
}

function getsec() {
	let now = new Date();
	let sec = now.getSeconds();
	return i(sec);
}