firebase.auth().signInAnonymously();

$(function() {
  if (getQueryString().id) {
    $("#js_inputWatchword").val(getQueryString().id);
    $("#js_presenWatch").val(getQueryString().id);
  }

  $("#js_submitBtn").on("click", function() {
    //禁止用語BANシステム
    var word = [
      "死ね",
      "消えろ",
      "fuck",
      "FUCK",
      "Fuck",
      "FUck",
      "FUCk",
      "🖕",
      "バカ",
      "殺",
      "ちんちん",
      "バーカ",
      "イキリト",
      "💩",
      "クズ",
      "ブリブリ",
      "無能",
      "弁護士",
      "ゆゆうた"
    ];

    if(word.indexOf($("#js_inputText").val()) >= 0){window.alert("禁止されている言葉が含まれています。");$("#js_inputText").val("");return;}
    sendComment($("#js_inputText").val(), $("#js_inputWatchword").val());
  });

  $(".js_btn").on("click", function() {
    sendComment($(this).text(), $("#js_inputWatchword").val());
    $(".js_btn").prop("disabled", true);
    $(".alert").text("2秒に一回押せます。");
    // 3秒後に元に戻す
    setTimeout(function() {
      $(".alert").text("");
      $(".js_btn").prop("disabled", false);
    }, 2000);
    
  });

  function sendComment(text, watchword) {
    if (!text || !watchword) {
      return;
    }

    firebase
      .database()
      .ref("comment/" + watchword)
      .push({
        text
      })
      .then(() => {
        $("#js_inputText").val("");
      });
  }

  (function presenterSetup() {
    var shareURL = "";
    $(".modal-body input").on("change", function() {
      var id = $("#js_presenWatch").val();
      shareURL = "https://comets.nabettu.com/" + "?id=" + id;
      $("#js_shareURL")
        .val(shareURL)
        .addClass("anime")
        .delay(500)
        .queue(function() {
          $("#js_shareURL")
            .removeClass("anime")
            .dequeue();
        });
      $("#js_toCommentURL").attr("href", shareURL);
      qrcodegenerate();
    });
    $("#js_shareURL").on("focus", function() {
      $(this).select();
    });
    $("#js_showQRCodeBtn").on("click", function() {
      if (shareURL) {
        $("#js_qrcodeArea").show();
        qrcodegenerate();
      }
    });
    function qrcodegenerate() {
      $("#js_qrcodeArea")
        .html("")
        .qrcode({ width: 100, height: 100, text: shareURL });
    }
    $("#js-bookmarklet").hover(
      function() {
        this.select();
      },
      function() {}
    );
  })();
});

function getQueryString() {
  var result = {};
  if (1 < window.location.search.length) {
    var query = window.location.search.substring(1);
    var parameters = query.split("&");
    for (var i = 0; i < parameters.length; i++) {
      var element = parameters[i].split("=");
      var paramName = decodeURIComponent(element[0]);
      var paramValue = decodeURIComponent(element[1]);
      result[paramName] = paramValue;
    }
  }
  return result;
}
