$(function(){

//HTMLを初期化
$("table.tbl tbody").html("");

//HTMLを生成
$.getJSON("https://rti-giken.jp/fhc/api/train_tetsudo/delay.json", function(data){
$(data.release).each(function(){
$('<tr>'+
'<th>'+this.day+'</th>'+
'<td class="label"><span class="' + this.label + '">' +
this.category + '</span></td>'+
'<td><a href="' + this.url + '" target="' +
this.target + '">' + this.content + '</a></td>'+
'</tr>').appendTo('table.tbl tbody');
})
})
});
