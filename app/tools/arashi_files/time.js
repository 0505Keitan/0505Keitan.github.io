timerID = setInterval('clock()',0.0001); //0.0000001秒毎にclock()を実行

function clock() {
	document.getElementById("view_pd").innerHTML = postDay();
	document.getElementById("view_ph").innerHTML = postHour();
	document.getElementById("view_pm").innerHTML = postMin();
	document.getElementById("view_ps").innerHTML = postSec();
}

function postIma() {
var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2020/12/31 23:59:59");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
// ※ 月は0～11までで指定
var anyDays = new Date(2019,11,31);

// 1日のマイクロ秒で除算をすると
// 開催日までの日数が算出できる
remainDay = Math.floor((anyDays - now) / (24*60*60*1000));

// 開催前日の場合は残り0日になってしまうのを防止
remainDay++;


	window.open('https://twitter.com/share?url=https://0505Keitan.com/tools/arashi.html&hashtags=大野くんの夏休み,嵐&text=嵐活動休止まで' + remainDay + '日' + haa + '時間' + ma + '分' + sa + '秒', '_blank', 'width=450,height=500');
}
// ここからカウントダウン

function arashi() {
    window.open('https://twitter.com/intent/tweet?button_hashtag=%E5%A4%A7%E9%87%8E%E3%81%8F%E3%82%93%E3%81%AE%E5%A4%8F%E4%BC%91%E3%81%BF&ref_src=twsrc%5Etfw', '_blank', 'width=450,height=500');
}

function postDay() {
	var now = new Date();

// 開催日を設定
// ※ 月は0～11までで指定
var anyDay = new Date(2020,11,31);

// 1日のマイクロ秒で除算をすると
// 開催日までの日数が算出できる
remainDay = Math.floor((anyDay - now) / (24*60*60*1000));

// 開催前日の場合は残り0日になってしまうのを防止
remainDay++;
var pd = remainDay + "日";
return pd;
}

function postHour() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2020/12/31 23:59:59");
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
        var ph = haa + "時間";
        return ph;
}

function postMin() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2020/12/31 23:59:59");
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
        var pm = ma + "分";
        return pm;
}

function postSec() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2020/12/31 23:59:59");
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
        var ps = sa + "秒";
        return ps;
}
