setInterval('clock()',500); //0.5秒毎にclock()を実行

let i = (n) => ('0' + n).slice(-2);

function clock() {
    document.getElementById("now_year").innerText = year();
    document.getElementById("view_day").innerText = day();
    document.getElementById("view_hour").innerText = hour(year()+"/12/31 23:59:59");
    document.getElementById("view_min").innerText = min(year()+"/12/31 23:59:59");
    document.getElementById("view_sec").innerText = sec(year()+"/12/31 23:59:59");
}

function year() {
	var now = new Date();
	var year = now.getFullYear();
	return year;
}

function day() {
    let now = new Date();
    let anyDay = new Date(year(),11,31);
    let remainDay = Math.floor((anyDay - now) / (24*60*60*1000));
    remainDay++;
    return remainDay;
}

function hour(date) {
    var now = new Date();
    var anyDate = new Date(date);//カウントダウンしたい日
    var ms = anyDate - now;//日数を計算
    var ha = Math.floor(ms / 3600000);//時間を取得
    var haa = ha % 24;
    return haa;
}

function min(date) {
    var now = new Date();
    var anyDate = new Date(date);//カウントダウンしたい日
    var ms = anyDate - now;//日数を計算
    var ha = Math.floor(ms / 3600000);//時間を取得
    var ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    return i(ma);
}

function sec(date) {
    var now = new Date();
    var anyDate = new Date(date);//カウントダウンしたい日
    var ms = anyDate - now;//日数を計算
    var ha = Math.floor(ms / 3600000);//時間を取得
    var ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);//秒を取得
    return i(sa);
}