setInterval('clock()',500); //0.5秒毎にclock()を実行

let i = (n) => ('0' + n).slice(-2);

function clock() {
    document.getElementById("view_day").innerHTML = day();
    document.getElementById("view_hour").innerHTML = hour();
    document.getElementById("view_min").innerHTML = min();
    document.getElementById("view_sec").innerHTML = sec();
}

function day() {
    let now = new Date();
    let anyDay = new Date(2019,11,31);
    let remainDay = Math.floor((anyDay - now) / (24*60*60*1000));
    remainDay++;
    return i(remainDay);
}

function hour() {
    var now = new Date();
    var anyDate = new Date("2019/12/31 23:59:59");//カウントダウンしたい日
    var ms = anyDate - now;//日数を計算
    var ha = Math.floor(ms / 3600000);//時間を取得
    var haa = ha % 24;
    return i(haa);
}

function min() {
    var now = new Date();
    var anyDate = new Date("2019/12/31 23:59:59");//カウントダウンしたい日
    var ms = anyDate - now;//日数を計算
    var ha = Math.floor(ms / 3600000);//時間を取得
    var ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    return i(ma);
}

function sec() {
    var now = new Date();
    var anyDate = new Date("2019/12/31 23:59:59");//カウントダウンしたい日
    var ms = anyDate - now;//日数を計算
    var ha = Math.floor(ms / 3600000);//時間を取得
    var ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);//秒を取得
    return i(sa);
}