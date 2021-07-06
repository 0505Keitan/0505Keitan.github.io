const listen = new webkitSpeechRecognition();
listen.lang = 'ja-JP';
listen.interimResults = false;
listening = false;
let res = [];

$('#btn').on('click', function() {
    if (listening) {
        if(window.confirm('履歴がすべて消えます。よろしいですか？')){
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
    listen.stop();
    listening = false;
    let o = [];
    if(e.results[0].isFinal){
        let autotext =  e.results[0][0].transcript
        res.push(autotext);
        $('#content').text('形態素解析中...「'+autotext+'」');
        kuromoji.builder({ dicPath: "./dict" }).build(function(e, t){
            if(e){
                console.log(e);
            }else{
                for(i=0;i<t.tokenize(autotext).length;i++){
                    o.push('<tr><td>' + t.tokenize(autotext)[i].surface_form + '</td><td>' + t.tokenize(autotext)[i].reading + '</td><td>' + t.tokenize(autotext)[i].pos + '</td></tr>');
                    console.log(t.tokenize(autotext)[i]);
                }
                $('#content').html('<tr><th>単語</th><th>読み方</th><th>品詞</th></tr>' + o.join(''));
            }
        });
    }
}

listen.onend = () => {
    listen.start();
    listening = true;
};

$('#download').on('click', function() {
    let blob = new Blob([ res.join('\n') ], { "type" : "text/plain" });
    if(window.navigator.msSaveBlob){ 
        window.navigator.msSaveBlob(blob, "test.txt"); 
        window.navigator.msSaveOrOpenBlob(blob, "test.txt"); 
    }else{
        $('#download').attr("href", window.URL.createObjectURL(blob));
    }
});