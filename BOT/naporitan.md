# n
> ## 説明

今のDiscordのボットにはない機能を実装していくのがこのボットの目的です。   
このボットはまだ開発段階のため不具合が複数あります。  
初期のPrefixは`./` に設定されています。
複数のサーバーで使用する場合はWelcomeChannelをdisableにする事をオススメします。  

> ## 使い方
1. `Blade-master`を解凍して下さい
1. 解凍したら`setup.bat`を実行して指示に従います。
1. 設定が終わったら`start.bat`を実行して下さい。Macの場合は`start.sh`を実行します。

これで起動が出来ます。  
エラーが出た場合は[こちら](https://djs-jpn.ga/help)をご覧下さい。それでも解決しない場合はDiscordの`#report`に報告して下さい。  
> ## .env
```
Token=""
Prefix="./" 
Language="ja_jp"
WelcomeChannel="disable"
RestartDelay="600000"
DocomoAPIKEY="disable"
```
[DocomoAPI](https://dev.smt.docomo.ne.jp/?p=docs.api.page&api_name=dialogue&p_name=api_1)

> ## コマンド一覧

| コマンド | コマンド説明 |
| :-- | :-- |
| help | コマンド一覧を表示します。 |
| ping | Ping（通信速度）を確認します（数字が０に近いほど速い） |
| avatar | 自分のプロフィール画像を表示します。|
| translate <翻訳先言語> <テキスト> | テキストを翻訳 |
| discordstats | Discordのサーバー状態を確認 |
| talk | DocomoAPIを使った雑談機能 |


## [ダウンロード](https://github.com/DJS-JPN/Blade)

> ## 関連リンク
[GitHub](https://github.com/DJS-JPN/Blade)