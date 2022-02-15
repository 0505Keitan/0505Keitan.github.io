const charsArray = {
    number: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    lower: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    upper: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    symbol: ["!", "#", "%", "&", "@", ";", ":", "+", "*", ",", ".", "<", ">", "?"],
    very: ["¡", "™", "£", "¢", "∞", "§", "¶", "•", "ª", "º", "–", "≠", "¥", "∑", "´", "´", "®", "†", "ø", "π", "“", "‘", "å", "ß", "ƒ", "©", "˙", "∆", "˚", "¬", "…", "æ", "«", "Ω", "≈", "ç", "√", "∫", "˜", "˜", "µ", "≤", "≥", "/"]
}

function getPasswordOptions(formElement) {
    const chars = (function() {
        let _chars = [];
        formElement["chars"].forEach(checkbox => {
            if (checkbox.checked) {
                _chars.push(
                    (function (str) {
                        switch (str) {
                            case "123": return "number";
                            case "abc": return "lower";
                            case "ABC": return "upper";
                            case "記号": return "symbol";
                            case "特殊": return "very";
                        }
                    })(checkbox.labels[0].textContent)
                );
            }
        });
        return _chars;
    })();

    const length = (function() {
        let _length = 0;
        formElement["length"].forEach(radio => {
            if (radio.checked) {
                _length = parseInt(radio.labels[0].textContent, 10);
            }
        });
        return _length;
    })();

    return {
        length: length,
        chars: chars
    };
}

function generatePassword(option) {
    const length = parseInt(option.length);
    const charsOptions = option.chars;

    const chars = (function() {
        let _chars = [];
        for (const it of charsOptions) {
            _chars = _chars.concat(charsArray[it]);
        }
        return _chars;
    })();

    const password = (function() {
        let _password = "";
        for (let i = 0; i < length; i++) {
            _password += chars[Math.floor(Math.random() * chars.length)];
        }
        return _password;
    })();

    return password;
};

/* onSubmit */
document.forms["gen-password"].addEventListener("submit", event => {
    event.preventDefault();

    const option = getPasswordOptions(event.target);
    const password = generatePassword(option);
    const password2 = generatePassword(option);
    const password3 = generatePassword(option);
    const password4 = generatePassword(option);
    const password5 = generatePassword(option);

    document.getElementById("password").value = password;
    document.getElementById("password2").value = password2;
    document.getElementById("password3").value = password3;
    document.getElementById("password4").value = password4;
    document.getElementById("password5").value = password5;
    submit()
});

function num() {
      target = document.getElementById("outpass");
      selindex = document.genpass.Select1.selectedIndex;
      switch (selindex) {
        case 0:
            target.innerHTML = "";
            return false;
        case 1:
            target.innerHTML = "<input readonly='readonly' id='password2' class='password'>";
            return false;
        case 2:
        	target.innerHTML = "<input readonly='readonly' id='password2' class='password'><br><input readonly='readonly' id='password3' class='password'>";
        	return false;
        case 3:
          target.innerHTML = "<input readonly='readonly' id='password2' class='password'><br><input readonly='readonly' id='password3' class='password'><br><input readonly='readonly' id='password4' class='password'>";
          return false;
        case 4:
          target.innerHTML = "<input readonly='readonly' id='password2' class='password'><br><input readonly='readonly' id='password3' class='password'><br><input readonly='readonly' id='password4' class='password'><br><input readonly='readonly' id='password5' class='password'>";
          return false;
      }
      
    }
    
    target1 = document.getElementById("output");
        target1.innerHTML = "<input type= 'button' id='copy' value='コピー' onclick=copy2()>";


/* onLoad */
(function () {
    if (!"serviceWorker" in navigator) return;

    navigator.serviceWorker.register("./service-worker.js").then(result => {
        console.log("SW install");
    });
})();

function ch() {
    if( document.forms[0].sw.checked == true ) {
        target = document.getElementById("output");
        target.innerHTML = "<input type= 'button' id='copy' value='コピー' onclick=copy1()>";
    }
    else {
        target = document.getElementById("output");
        target.innerHTML = "<input type= 'button' id='copy' value='コピー' onclick=copy2()>";
    }
}

function dev() {
    if( document.forms[0].deve.checked == true ) {
        target = document.getElementById("dev-output");
        target.innerHTML = "<input type='checkbox' name='chars' onclick=devalert()><font color='red'>特殊</font>";
    } else {
        target = document.getElementById("dev-output");
        target.innerHTML = "";
    }
}

function devalert() {
    alert("一部の機種によっては使用できない場合があります。");
}

function devalert1() {
    alert("まだ実験的な機能です。動作確認はしておりません。");
}

function devalert2() {
    devalert1();
    dev();
}

    target = document.getElementById("output");
      selindex = document.genpass.Select1.selectedIndex;
      switch (selindex) {
        case 1:
            target.innerHTML = "";
            break;
        case 2:
        	target.innerHTML = "";
        	break;
        case 3:
          target.innerHTML = "";
          break;
        case 4:
          target.innerHTML = "";
          break;
        }

function copy1() {
    // コピー対象をJavaScript上で変数として定義する
    let copyTarget = document.getElementById("password");
    // コピー対象のテキストを選択する
    copyTarget.select();
    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");
}

function copy2() {
    // コピー対象をJavaScript上で変数として定義する
    let copyTarget = document.getElementById("password");
    // コピー対象のテキストを選択する
    copyTarget.select();
    // 選択しているテキストをクリップボードにコピーする
    document.execCommand("Copy");
    // コピーをお知らせする
    alert("コピーしました！「 " + copyTarget.value + " 」");            
}