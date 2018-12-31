// Firebaseの初期化
var config = {
apiKey: "AIzaSyBczL_oF3BT4HuTXDOsihatdxOTEpNMU8U",
authDomain: "kakeibo-0505keitan.firebaseapp.com",
};
firebase.initializeApp(config);

// データベースと接続する
var messagesRef = new Firebase('https://kakeibo-0505keitan.firebaseio.com/');

var messageField = $('#messageInput');
var nameField = $('#nameInput');
var messageList = $('#messages');

// ENTERキーを押した時に発動する
messageField.keypress(function (e) {


    if (e.keyCode == 13) {
        //フォームに入力された情報
        var username = nameField.val();
        var message = messageField.val();

        //データベースに保存する
        messagesRef.push({name:username, text:message});
        messageField.val('');

        $('#scroller').scrollTop($('#messages').height());
    }
});

// データベースにデータが追加されたときに発動する
messagesRef.limitToLast(10).on('child_added', function (snapshot) {
var userId = firebase.auth().currentUser;

    //取得したデータ
    var data = snapshot.val();
    var username = data.name || "anonymous";
    var message = data.text;

    //取得したデータの名前が自分の名前なら右側に吹き出しを出す
            var messageElement = $("<il><p class='sender_name me'>" + username + "</p><p class='right_balloon'>" + message + "</p><p class='clear_balloon'></p></il>");
    //HTMLに取得したデータを追加する
    messageList.append(messageElement)

    //一番下にスクロールする
    messageList[0].scrollTop = messageList[0].scrollHeight;
});