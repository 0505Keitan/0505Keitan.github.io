function getDelay(){

//JSONデータ
var data = {"release": [
{
"day": "2013.07.30",
"label": "company",
"category": "企業情報",
"content": "テキストテキストテキスト",
"url": "http://www.yahoo.co.jp/",
"target": "_blank"
},

{
"day": "2013.07.30",
"label": "products",
"category": "商品情報",
"content": "テキストテキストテキスト",
"url": "http://www.google.co.jp/",
"target": "_blank"
},

{
"day": "2013.07.30",
"label": "company",
"category": "企業情報",
"content": "テキストテキストテキスト",
"url": "http://www.yahoo.co.jp/",
"target": "_self"
}
]}

//HTMLを初期化
$("table.tbl tbody").html("");

//HTMLを生成
for(var index in data.release){
$('<tr>'+
'<th>'+data.release[index].day+'</th>'+
'<td class="label"><span class="' +
data.release[index].label + '">' +
data.release[index].category +
'</span></td>'+
'<td><a href="' + data.release[index].url +
'" target="' + data.release[index].target +
'">' + data.release[index].content + '</a></td>'+
'</tr>').appendTo('table.tbl tbody');
}
});
