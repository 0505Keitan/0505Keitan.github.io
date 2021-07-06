const listen = new webkitSpeechRecognition();
listen.lang = 'ja-JP';
listen.interimResults = false;
listening = false;
let res = [];

$('#btn').on('click', function() {
    if(listening){
        if(window.confirm('履歴がすべて消えます。よろしいですか？\nもしくはキャンセルしてダウンロードしてください！')){
            location.reload();
            listening = false;
            $('#btn').text('start');
            return;
        }
    }else{
        listen.start();
        listening = true;
        $('#btn').text('reset');
        $('#status').text('You not talking');
    }
});

listen.onspeechstart = () => {
    $('#status').text('You talking now!');
};
listen.onspeechend = () => {
    $('#status').text('You not talking');
};

listen.onresult = function(e) {
    //listen.stop();
    listening = false;
    if(e.results[0].isFinal){
        var autotext =  e.results[0][0].transcript;
        console.log(autotext);
        $('#content').prepend('<div>'+ autotext +'</div>');
        res.push(autotext);
    }
}

listen.onend = () => {
    listen.start();
    listening = true;
};

$('#download').on('click', function() {
    filename = window.prompt("ファイル名を設定してください。", getTime());
    let blob = new Blob([ res.join('\n') ], { "type" : "text/plain" });
    if(window.navigator.msSaveBlob){
        window.navigator.msSaveBlob(blob, "test.txt");
        window.navigator.msSaveOrOpenBlob(blob, "test.txt");
    }else{
        $('#download').attr("href", window.URL.createObjectURL(blob));
        if(filename===null){
            $('#download').attr("download", getTime()+".txt");
        }else{
            $('#download').attr("download", filename+".txt");
        }
    }
});

const getTime = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const hour = today.getHours();
    const min = today.getMinutes();
    return year+'-'+month+'-'+day+'-'+hour+':'+min;
}