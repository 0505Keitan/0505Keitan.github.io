timerID = setInterval('clock()',0.01); //0.00001秒毎にclock()を実行

var i = function(n){return('0'+n).slice(-2);}

function clock() {
	document.getElementById("view_pd").innerHTML = postDay();
	document.getElementById("view_ph").innerHTML = postHour();
	document.getElementById("view_pm").innerHTML = postMin();
	document.getElementById("view_ps").innerHTML = postSec();
}

// ここからカウントダウン

function postDay() {
	var now = new Date();
 
// 開催日を設定
// ※ 月は0～11までで指定
var anyDay = new Date(2020,0,18);
 
// 1日のマイクロ秒で除算をすると
// 開催日までの日数が算出できる
remainDay = Math.floor((anyDay - now) / (24*60*60*1000));
 
// 開催前日の場合は残り0日になってしまうのを防止
remainDay++;
var pd = i(remainDay) + "日";
return pd;
}

function postHour() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2020/01/18 09:00:00");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
 
        //HTML上に出力
        var ph = i(haa) + "時間";
        return ph;
}

function postMin() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2020/01/18 09:00:00");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
 
        //HTML上に出力
        var pm = i(ma) + "分";
        return pm;
}

function postSec() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2020/01/18 09:00:00");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
 
        //HTML上に出力
        var ps = i(sa) + "秒";
        return ps;
}


