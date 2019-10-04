document.body.appendChild(document.createElement("script")).src =
  "//ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";
document.body.appendChild(document.createElement("script")).src =
  "https://www.gstatic.com/firebasejs/5.5.7/firebase.js";

const watchword = 'opencampus2019-tachikawa';

setTimeout(function() {
  var config = {
        apiKey: " AIzaSyBczL_oF3BT4HuTXDOsihatdxOTEpNMU8U",
        authDomain: "kakeibo-0505keitan.firebaseapp.com",
        databaseURL: "https://kakeibo-0505keitan.firebaseio.com",
        projectId: "kakeibo-0505keitan",
        storageBucket: "kakeibo-0505keitan.appspot.com",
        messagingSenderId: "161060563071"
      };
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
    firebase.auth().signInAnonymously();
  } else {
    alert("すでに別なfirebaseアプリが定義されているためcommentを利用出来ません");
  }

  var cssfile = $("<link>", {
    href: "//comets.nabettu.com/presenter/style.css",
    type: "text/css",
    rel: "stylesheet"
  });
  $("body").append(cssfile);

  var wrapperDom = $("<div></div>", {
    id: "comets"
  });

  if ($(".punch-full-screen-element").length) {
    $(".punch-full-screen-element").append(wrapperDom);
  } else {
    $("body").append(wrapperDom);
  }

  wrapperReset = function() {
    setTimeout(function() {
      console.log("reset");
      wrapperDom.remove();
      if ($(".punch-full-screen-element").length) {
        $(".punch-full-screen-element").append(wrapperDom);
      } else {
        $("body").append(wrapperDom);
      }
      $("#comets").css("font-size", $(window).height() / 12 + "px");
    }, 1500);
  };

  $("#punch-start-presentation-left").on("click", function() {
    wrapperReset();
  });

  $(window).on("resize", function(e) {
    wrapperReset();
  });

  $(window).keydown(function(e) {
    if (event.shiftKey && event.metaKey) {
      if (e.keyCode === 13) {
        wrapperReset();
        return false;
      }
    }
  });

  var dbref = firebase.database().ref("comment/" + watchword);
  dbref.set(null).then(e => {
    dbref.on("child_added", commentSnapShot => {
      var commentText = commentSnapShot.val().text;
      var id = commentSnapShot.key;

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
        "殺"
      ];
      if(word.indexOf(commentText) >= 0)return;

      var commentDom = $("<p></p>", {
        addClass: "comment",
        id: id
      })
        .text(commentText)
        .css({
          top: Math.random() * 90 + "%"
        });
      $("#comets").append(commentDom);
      setTimeout(
        function(id) {
          $("#comets #" + id).remove();
        },
        10000,
        id
      );
    });
  });
}, 1000);