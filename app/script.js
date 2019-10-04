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
    alert("縺吶〒縺ｫ蛻･縺ｪfirebase繧｢繝励Μ縺悟ｮ夂ｾｩ縺輔ｌ縺ｦ縺�ｋ縺溘ａcomets繧貞茜逕ｨ蜃ｺ譚･縺ｾ縺帙ｓ");
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
  var setupedTextDom = $("<p></p>", {
    addClass: "status"
  }).text("comets is ready");

  if ($(".punch-full-screen-element").length) {
    $(".punch-full-screen-element").append(wrapperDom);
  } else {
    $("body").append(wrapperDom);
  }
  wrapperDom.append(setupedTextDom);

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

    dbref.push({
      text: "comets setup done!"
    });
  });
}, 1000);