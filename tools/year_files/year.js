date = new Date();
    year = date.getFullYear();
    if((year % 4 == 0 && year % 100 != 0 ) || year % 400 == 0) {
        count = new Array(0,31,60,91,121,152,182,213,244,274,305,335);
    }else{
        count = new Array(0,31,59,90,120,151,181,212,243,273,304,334);
    }
    date_count = count[date.getMonth()] + date.getDate();
window.onload = function onLoad() {
target = document.getElementById("view");
years = document.getElementById("years");
	var now = date_count;
	var max = 365;
	var math = now / max * 100;
	var result = Math.floor( math ) ;
	target.innerHTML = result;
	years.innerHTML = year;
	document.getElementById( "prog" ).value = date_count ;
}

function getPost() {
	date = new Date();
    year = date.getFullYear();
	var now = date_count;
	var max = 365;
	var math = now / max * 100;
	var result = Math.floor( math ) ;
	window.open("https://twitter.com/share?url=https://0505Keitan.github.io/tools/year.html&hashtags=YearComplete&text=" + year + "年は" + result + "%終了しました。", "_blank", "width=450,height=500");
}