var html = '<style>html{height:100%}body{width: 90%;margin: 50px auto;text-align: center;background: -moz-linear-gradient(top, #FFC778, #FFF);background: -webkit-linear-gradient(top, #FFC778, #FFF);background: linear-gradient(to bottom, #FFC778, #FFF);}a{display: inline-block;padding: 0.3em 1em;text-decoration: none;border: solid 2px #FFC778;border-radius: 3px;transition: .4s;font-size: 20px;margin: 50px auto;}a:hover {background: #FFC778;color: white;}</style><h1>Please access in Chrome</h1><a href="https://www.google.com/intl/ja_jp/chrome/">Download GoogleChrome</a>';

if(!(window.navigator.userAgent.toLowerCase().indexOf('chrome')!==-1)&&(window.navigator.userAgent.toLowerCase().indexOf('edge')===-1)&&(window.navigator.userAgent.toLowerCase().indexOf('opr')===-1))$('body').html(html);