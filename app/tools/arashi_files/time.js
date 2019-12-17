setInterval('clock()',500); //0.5秒毎にclock()を実行

let i = (n) => ('0' + n).slice(-2);
let display = (n, e) => document.getElementById(n).innerText = e;

function clock() {
	display("view_pd", postDay());
	display("view_ph", postHour());
	display("view_pm", postMin());
	display("view_ps", postSec());
}

function postIma() {
let now = new Date();
    //カウントダウンしたい日を設定
    let anyDate = new Date("2020/12/31 23:59:59");
    //日数を計算
    let ms = anyDate - now;
        //時間を取得
        let ha = Math.floor(ms / 3600000);
        let haa = ha % 24;
        //分を取得
        let ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        let sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
// ※ 月は0～11までで指定
let anyDays = new Date(2019,11,31);

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
	let now = new Date();

// 開催日を設定
// ※ 月は0～11までで指定
let anyDay = new Date(2020,11,31);

// 1日のマイクロ秒で除算をすると
// 開催日までの日数が算出できる
remainDay = Math.floor((anyDay - now) / (24*60*60*1000));

// 開催前日の場合は残り0日になってしまうのを防止
remainDay++;
let pd = remainDay + "日";
return pd;
}

function postHour() {
	let now = new Date();
    //カウントダウンしたい日を設定
    let anyDate = new Date("2020/12/31 23:59:59");
    //日数を計算
    let ms = anyDate - now;
        //時間を取得
        let ha = Math.floor(ms / 3600000);
        let haa = ha % 24;
        //分を取得
        let ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        let sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);

        //HTML上に出力
        let ph = haa + "時間";
        return ph;
}

function postMin() {
	let now = new Date();
    //カウントダウンしたい日を設定
    let anyDate = new Date("2020/12/31 23:59:59");
    //日数を計算
    let ms = anyDate - now;
        //時間を取得
        let ha = Math.floor(ms / 3600000);
        let haa = ha % 24;
        //分を取得
        let ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        let sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);

        //HTML上に出力
        let pm = ma + "分";
        return pm;
}

function postSec() {
	let now = new Date();
    //カウントダウンしたい日を設定
    let anyDate = new Date("2020/12/31 23:59:59");
    //日数を計算
    let ms = anyDate - now;
        //時間を取得
        let ha = Math.floor(ms / 3600000);
        let haa = ha % 24;
        //分を取得
        let ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        let sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);

        //HTML上に出力
        let ps = sa + "秒";
        return ps;
}
