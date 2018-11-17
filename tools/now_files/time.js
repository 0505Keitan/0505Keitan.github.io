timerID = setInterval('clock()',0.01); //0.00001秒毎にclock()を実行

function clock() {
	document.getElementById("view_year").innerHTML = getyear();
	document.getElementById("view_month").innerHTML = getmon();
	document.getElementById("view_day").innerHTML = getday();
	document.getElementById("view_hour").innerHTML = geth();
	document.getElementById("view_min").innerHTML = getmin();
	document.getElementById("view_sec").innerHTML = getsec();
}

function getPost() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	window.open('https://twitter.com/share?url=https://0505Keitan.github.io/tools/nowtime.html&hashtag=nowTime&text=今は' + year + '年' + mon + '月' + day + '日' + hour + '時' + min + '分' + sec + '秒です！', '_blank', 'width=450,height=500');
}

function getyear() {
	var now = new Date();
	var year = now.getFullYear();
	var y = year + "年";
	return y;
}

function getmon() {
	var now = new Date();
	var mon = now.getMonth()+1;
	var m = mon + "月";
	return m;
}

function getday() {
	var now = new Date();
	var day = now.getDate();
	var d = day + "日";
	return d;
}

function geth() {
	var now = new Date();
	var hour = now.getHours();
	var h = hour + "時";
	return h;
}

function getmin() {
	var now = new Date();
	var min = now.getMinutes();
	var m = min + "分";
	return m;
}

function getsec() {
	var now = new Date();
	var sec = now.getSeconds();
	var s = sec + "秒";
	return s;
}



/*
function linktwi() {
		var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	location.href='https://twitter.com/intent/tweet?url=https://0505Keitan.github.io&text=%e4%bb%8a%e3%81%af' + year + '%e5%b9%b4AA%e6%9c%88AA%e6%97%a5AA%e6%99%82AA%e5%88%86AA%e7%a7%92%e3%81%a7%e3%81%99%ef%bc%81%2d%20%23nowTime
';
var twi = document.getElementById('twi');
twi.innerHTML = '<a href="https://twitter.com/share?text=%e4%bb%8a%e3%81%af' + year + '%e5%b9%b4AA%e6%9c%88AA%e6%97%a5AA%e6%99%82AA%e5%88%86AA%e7%a7%92%e3%81%a7%e3%81%99%ef%bc%81%2d%20%23nowTime" target="_blank">Twitterでシェアする</a>`.replace('\n', '<br>')';
}
*/