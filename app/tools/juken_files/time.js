setInterval('clock()',500); //0.5秒毎にclock()を実行

let i = (n) => ('0' + n).slice(-2);
let display = (n, e) => document.getElementById(n).innerText = e;

function clock() {
    display("view_day", day());
	display("view_hour", hour());
	display("view_min", min());
	display("view_sec", sec());
}

function day() {
    let now = new Date();
    let anyDay = new Date(2020,0,18);
    let remainDay = Math.floor((anyDay - now) / (24*60*60*1000));
    remainDay++;
    return i(remainDay);
}

function hour() {
    let now = new Date();
    let anyDate = new Date("2020/01/18 09:00:00");//カウントダウンしたい日
    let ms = anyDate - now;//日数を計算
    let ha = Math.floor(ms / 3600000);//時間を取得
    let haa = ha % 24;
    return i(haa);
}

function min() {
    let now = new Date();
    let anyDate = new Date("2020/01/18 09:00:00");//カウントダウンしたい日
    let ms = anyDate - now;//日数を計算
    let ha = Math.floor(ms / 3600000);//時間を取得
    let ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    return i(ma);
}

function sec() {
    let now = new Date();
    let anyDate = new Date("2020/01/18 09:00:00");//カウントダウンしたい日
    let ms = anyDate - now;//日数を計算
    let ha = Math.floor(ms / 3600000);//時間を取得
    let ma = Math.floor((ms - ha * 3600000) / 60000);//分を取得
    let sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);//秒を取得
    return i(sa);
}